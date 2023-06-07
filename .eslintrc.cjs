module.exports = {
  env: { browser: true, es2020: true, node: true },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  settings: {
    react: {
      version: 'detect'
    },
    "import/resolver": {
      alias: {
        map: [
          ['@components', './src/components'],
          ['@reducers', './src/reducers'],
          ['@selectors', './src/selectors'],
          ['@types', './src/types'],
          ['@utils', './src/utils'],
        ],
        extensions: ['.ts', '.tsx'],
      },
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react-refresh', '@typescript-eslint'],
  ignorePatterns: ['vite.config.ts','jest.config.ts'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    '@typescript-eslint/quotes': [2,'double'],
    'react/function-component-definition': 0,
    'import/no-extraneous-dependencies':0,
    'react-hooks/exhaustive-deps': 0,
    'implicit-arrow-linebreak': 0,
    'react/react-in-jsx-scope': 0,
    'function-paren-newline': 0,
    'operator-linebreak': 0,
    'import/extensions':  0,
    'no-param-reassign': 0,
    'arrow-body-style': 0,
    '@typescript-eslint/comma-dangle': [
      'off',
      {
        'arrays': 'always-multiline',
        'objects': 'always-multiline',
        'imports': 'never',
        'exports': 'never',
        'functions': 'never'
      }
    ],
  },
}
