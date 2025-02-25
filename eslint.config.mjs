import { FlatCompat } from '@eslint/eslintrc';
import eslint from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';
import importPlugin from 'eslint-plugin-import';
import unusedImportsPlugin from 'eslint-plugin-unused-imports';
import { dirname } from 'path';
import tseslint from 'typescript-eslint';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      '@next/next': nextPlugin,
      import: importPlugin,
      'unused-imports': unusedImportsPlugin,
    },
    rules: {
      // Remove unused imports
      'unused-imports/no-unused-imports': 'error',

      // Import sorting rules
      'import/order': [
        'error',
        {
          groups: [['builtin', 'external'], ['internal'], ['parent', 'sibling', 'index']],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
          pathGroups: [
            // General components - atomic design pattern
            { pattern: '@/components/general/atoms/**', group: 'internal', position: 'before' },
            { pattern: '@/components/general/molecules/**', group: 'internal', position: 'before' },
            { pattern: '@/components/general/organisms/**', group: 'internal', position: 'before' },

            // Feature components - atomic design pattern
            { pattern: '@/components/features/**/atoms/**', group: 'internal', position: 'before' },
            {
              pattern: '@/components/features/**/molecules/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '@/components/features/**/organisms/**',
              group: 'internal',
              position: 'before',
            },

            // Higher level components
            { pattern: '@/components/templates/**', group: 'internal', position: 'before' },
            { pattern: '@/components/pages/**', group: 'internal', position: 'before' },
            { pattern: '@/pages/**', group: 'internal', position: 'before' },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
        },
      ],
    },
  },
  // Rules for atoms (can be imported anywhere)
  {
    files: ['**/atoms/**/*.{ts,tsx}'],
    rules: {
      'no-restricted-imports': 'off',
    },
  },
  // Rules for molecules (can only import atoms)
  {
    files: ['**/molecules/**/*.{ts,tsx}'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: [
                '@/components/*/molecules/**',
                '@/components/*/organisms/**',
                '@/components/templates/**',
                '@/components/pages/**',
              ],
              message: 'Molecules can only import from atoms.',
            },
          ],
        },
      ],
    },
  },
  // Rules for organisms (can import atoms and molecules)
  {
    files: ['**/organisms/**/*.{ts,tsx}'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: [
                '@/components/*/organisms/**',
                '@/components/templates/**',
                '@/components/pages/**',
              ],
              message: 'Organisms can only import from atoms and molecules.',
            },
          ],
        },
      ],
    },
  },
  {
    ignores: ['node_modules/*', '.next/*', 'out/*', 'dist/*', '**/*.config.js'],
  },
];

export default eslintConfig;
