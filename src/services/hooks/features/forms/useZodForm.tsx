import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useState } from 'react';
import {
  useForm,
  UseFormProps,
  UseFormReturn,
  FieldValues,
  Path,
  SubmitHandler,
} from 'react-hook-form';
import { z } from 'zod';

// Server errors type
export type ServerErrors<T extends FieldValues> = Partial<Record<Path<T>, string>>;

// Enhanced options for the multi-step form hook
export interface UseZodFormOptions<T extends FieldValues>
  extends Omit<UseFormProps<T>, 'resolver'> {
  schema: z.ZodType<T>;
  onSubmit?: SubmitHandler<T>;
  serverErrors?: ServerErrors<T>;

  // New option: Step configuration
  steps?: Array<{
    name: string;
    fields: Array<Path<T>>;
  }>;
}

// Enhanced return type with step validation
export interface UseZodFormReturn<T extends FieldValues>
  extends Omit<UseFormReturn<T>, 'handleSubmit'> {
  isSubmitting: boolean;
  serverErrors: ServerErrors<T>;
  setIsSubmitting: (value: boolean) => void;
  setServerErrors: (errors: ServerErrors<T>) => void;
  handleSubmit: (
    onValid: SubmitHandler<T>,
    onInvalid?: (errors: unknown) => void,
  ) => (e?: React.BaseSyntheticEvent) => Promise<void>;
  validateStep: (stepName: string) => Promise<boolean>;
  currentStep: string | null;
  setCurrentStep: (stepName: string) => void;
  getStepFields: (stepName: string) => Array<Path<T>>;
  steps: Array<{ name: string; fields: Array<Path<T>> }> | undefined;
}

/**
 * A custom hook for managing multi-step forms using Zod for schema validation.
 *
 * This hook enhances the capabilities of `react-hook-form` by adding support for
 * Zod schema validation, server-side error handling, and multi-step form navigation.
 *
 * @template T The type of the form fields.
 *
 * @param {z.ZodType<T>} schema - The Zod schema for form validation.
 * @param {SubmitHandler<T>} [onSubmit] - A callback function that is called when the form is successfully submitted.
 * @param {ServerErrors<T>} [initialServerErrors] - Initial server-side errors to populate the form with.
 * @param {Array<{name: string, fields: Array<Path<T>>}>} [steps] - Configuration for multi-step navigation, including step names and the fields in each step.
 * @param {UseFormProps<T>} formOptions - Additional options to pass to the `useForm` hook.
 *
 * @returns {UseZodFormReturn<T>} An object with enhanced form methods and state including multi-step navigation and server-side error handling.
 */
export function useZodForm<T extends FieldValues>({
  schema,
  onSubmit,
  serverErrors: initialServerErrors,
  steps,
  ...formOptions
}: UseZodFormOptions<T>): UseZodFormReturn<T> {
  const form = useForm<T>({
    ...formOptions,
    resolver: zodResolver(schema),
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverErrors, setServerErrors] = useState<ServerErrors<T>>(initialServerErrors || {});

  const [currentStep, setCurrentStep] = useState<string | null>(
    steps && steps.length > 0 ? steps[0].name : null,
  );

  /**
   * Handles form submission with server-side validation and submission.
   *
   * @param onValid Callback function called when the form is valid and submitted.
   * @param onInvalid Callback function called when the form is invalid and submitted.
   * @returns A function that can be used as a form submit handler.
   */
  const handleSubmit: UseZodFormReturn<T>['handleSubmit'] = (onValid, onInvalid) => {
    return async (e) => {
      if (e) {
        e.preventDefault();
      }

      setServerErrors({});

      return form.handleSubmit(
        async (data) => {
          setIsSubmitting(true);
          try {
            if (onSubmit) {
              await onSubmit(data);
            }
            await onValid(data);
          } catch (error) {
            console.error('Form submission error:', error);
          } finally {
            setIsSubmitting(false);
          }
        },
        (errors) => {
          if (onInvalid) {
            onInvalid(errors);
          }
          return Promise.resolve();
        },
      )(e);
    };
  };

  /**
   * Returns an array of fields that are in the step with the given stepName.
   * If the step is not found, an empty array is returned.
   * @param stepName The name of the step to find the fields for.
   * @returns An array of fields in the step with the given stepName.
   */
  const getStepFields = (stepName: string): Array<Path<T>> => {
    if (!steps) return [];
    const step = steps.find((s) => s.name === stepName);
    return step ? step.fields : [];
  };

  /**
   * Validates a step of the form. If no step configuration is found
   * with the given stepName, the whole form is validated.
   * @param stepName The name of the step to validate.
   * @returns A promise that resolves to true if all fields in the step are valid, false otherwise.
   */
  const validateStep = async (stepName: string): Promise<boolean> => {
    const fieldsToValidate = getStepFields(stepName);

    if (fieldsToValidate.length === 0) {
      return form.trigger();
    }

    const result = await form.trigger(fieldsToValidate);

    return result;
  };

  return {
    ...form,
    serverErrors,
    isSubmitting,
    setIsSubmitting,
    setServerErrors,
    handleSubmit,
    validateStep,
    currentStep,
    setCurrentStep,
    getStepFields,
    steps,
  };
}
