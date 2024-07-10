module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@lib', './lib']],
        extensions: ['.ts', '.js'],
      },
    },
  },
  extends: ['eslint:recommended', 'plugin:import/recommended'],
  plugins: ['import', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'no-console': 2,
  },
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
    {
      files: ['*.ts'],
      extends: ['plugin:@typescript-eslint/recommended'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      rules: {},
    },
    {
      env: {
        'jest/globals': true,
      },
      files: ['specs/**'],
      settings: {
        jest: {
          version: require('jest/package.json').version,
        },
      },
      plugins: ['jest'],
      extends: ['plugin:jest/recommended'],
      rules: {},
    },
  ],
};
