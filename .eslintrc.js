module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  ignorePatterns: ['dist', '.eslintrc.js'],
  plugins: [
    'react',
    'react-hooks', // ai
    'react-refresh',
    '@typescript-eslint',
    'import',
    'jsx-a11y',
    'promise',
    'n', // ai
    'prettier',
  ],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:promise/recommended',
    'plugin:n/recommended',
    'next/core-web-vitals',
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      files: ['.eslintrc.{js,cjs}'],
      env: {
        node: true,
      },
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
  rules: {
    // turn on errors for missing imports
    'import/no-unresolved': 'error',
    'n/exports-style': ['error', 'module.exports'],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};
