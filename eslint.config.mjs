import { FlatCompat } from '@eslint/eslintrc';
const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  {
    ignores: ['node_modules', '.next', 'out', 'public'],
  },
  ...compat.config({
    extends: [
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
      'next',
    ],
  }),
  {
    rules: {
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      'prettier/prettier': [
        'error',
        {
          trailingComma: 'all',
          semi: true,
          printWidth: 120,
          useTabs: false,
          singleQuote: true,
          tabWidth: 2,
          bracketSpacing: true,
        },
      ],
    },
  },
];
export default eslintConfig;
