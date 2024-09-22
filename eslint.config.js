const path = require('path');
const jsEsint = require('@eslint/js');
const globals = require('globals');
const tseslint = require('typescript-eslint');
const importPlugin = require('eslint-plugin-import');
const jest = require('eslint-plugin-jest');

module.exports = [
  {
    ignores: ['node_modules', 'dist', 'docs/.vitepress/dist', 'docs/.vitepress/cache'], // 忽略目录
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: globals.node,
    },
    plugins: {
      prettier: require('eslint-plugin-prettier'),
    },
    rules: {
      ...jsEsint.configs.recommended.rules,
      'prettier/prettier': 'error',
      'no-console': 'error',
    },
  },
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: require('@typescript-eslint/parser'),
      sourceType: 'module',
    },
    linterOptions: {
      noInlineConfig: false,
    },
    settings: {
      'import/resolver': {
        alias: {
          map: [['@lib', path.resolve(__dirname, 'lib')]],
          extensions: ['.ts', '.js'],
        },
      },
      'import/ignore': ['rollup-plugin-dts'],
    },
    plugins: {
      prettier: require('eslint-plugin-prettier'),
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
      import: importPlugin,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      ...importPlugin.configs.recommended.rules,
      'prettier/prettier': 'error',
      'no-console': 'error',
    },
  },
  {
    files: ['specs/**/*.ts'],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
    plugins: {
      jest: jest,
    },
    rules: {
      ...jest.configs['flat/recommended'].rules,
    },
  },
];
