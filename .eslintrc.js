module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['next', 'prettier', 'next/core-web-vitals'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['simple-import-sort', 'prettier'],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    '@next/next/no-html-link-for-pages': 'off',
    'newline-after-var': 'error',
    'no-console': [
      2,
      {
        allow: ['error'],
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'no-debugger': 2,
    'no-duplicate-imports': 'error',
    'no-duplicate-imports': 'error',
    'no-empty-function': 'error',
    'no-irregular-whitespace': 'error',
    'no-trailing-spaces': 'error',
    'no-unused-vars': 'error',
    'prefer-const': 'error',
    'react/jsx-key': 'off',
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
    camelcase: 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
}
