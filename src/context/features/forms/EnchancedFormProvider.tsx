import React, { createContext, useContext } from 'react';
import {
  FormProvider as RHFFormProvider,
  UseFormReturn,
  FieldValues,
} from 'react-hook-form';

import { UseZodFormReturn } from '@/services/hooks/features/forms/useZodForm';


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const EnhancedFormContext = createContext<any>(null);

interface EnhancedFormProviderProps<T extends FieldValues> {
  methods: UseZodFormReturn<T>;
  children: React.ReactNode;
}


export function EnhancedFormProvider<T extends FieldValues>({
  methods,
  children,
}: EnhancedFormProviderProps<T>) {
  // Extract only the standard methods that FormProvider expects
  const standardMethods = {
    control: methods.control,
    register: methods.register,
    handleSubmit: methods.handleSubmit,
    reset: methods.reset,
    clearErrors: methods.clearErrors,
    setValue: methods.setValue,
    getValues: methods.getValues,
    trigger: methods.trigger,
    formState: methods.formState,
    watch: methods.watch,
    setFocus: methods.setFocus,
    getFieldState: methods.getFieldState,
    setError: methods.setError,
    resetField: methods.resetField,
    unregister: methods.unregister,
  } as UseFormReturn<T>;

  return (
    <EnhancedFormContext.Provider value={methods}>
      <RHFFormProvider {...standardMethods}>{children}</RHFFormProvider>
    </EnhancedFormContext.Provider>
  );
}


/**
 * Access the enhanced form methods and state from a component.
 *
 * This hook returns all the methods and state of the enhanced form, which
 * includes the standard methods and state of `react-hook-form`, as well as
 * the additional step-related methods and state provided by the enhanced
 * form.
 *
 * @template T The type of the form fields.
 *
 * @returns The enhanced form methods and state.
 *
 * @throws {Error} If the hook is not used within an EnhancedFormProvider.
 */
export function useEnhancedForm<T extends FieldValues>() {
  const context = useContext(EnhancedFormContext);
  if (!context) {
    throw new Error('useEnhancedForm must be used within an EnhancedFormProvider');
  }
  return context as UseZodFormReturn<T>;
}


/**
 * Access the step-related methods and state of the enhanced form from a component.
 *
 * This hook returns an object with the step-related methods and state of the enhanced form,
 * which can be used to control multi-step form navigation and validation.
 *
 * @template T The type of the form fields.
 *
 * @returns An object with the following properties:
 *   - `validateStep`: A function to validate a step of the form.
 *   - `currentStep`: The current step of the form.
 *   - `setCurrentStep`: A function to set the current step of the form.
 *   - `getStepFields`: A function to get the fields of a step of the form.
 *   - `steps`: An array of step objects, each containing the step name and fields.
 *
 * @throws {Error} If the hook is not used within an EnhancedFormProvider.
 */
export function useFormSteps<T extends FieldValues>() {
  const { validateStep, currentStep, setCurrentStep, getStepFields, steps } = useEnhancedForm<T>();
  return { validateStep, currentStep, setCurrentStep, getStepFields, steps };
}


/**
 * Access the server-side error state of the enhanced form from a component.
 *
 * This hook returns an object with two properties:
 *   - `setServerErrors`: A function to set the server-side errors of the form.
 *   - `serverErrors`: The current server-side errors of the form.
 *
 * @template T The type of the form fields.
 *
 * @returns An object with the setServerErrors and serverErrors properties.
 *
 * @throws {Error} If the hook is not used within an EnhancedFormProvider.
 */
export function useFormServerErrors<T extends FieldValues>() {
  const { setServerErrors, serverErrors } = useEnhancedForm<T>();
  return {
    setServerErrors,
    serverErrors,
  };
}
