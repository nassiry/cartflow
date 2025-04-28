import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    ignores: ['test/', 'node_modules/', '*.min.js', '*.config.js', 'build/**'],
    rules: {
      eqeqeq: ["error", "always"],
      "no-unused-vars": ["error", { "args": "none" }],
      "prefer-const": "error",
      "no-var": "error",
      "arrow-body-style": ["error", "as-needed"],
      "no-console": ["warn", { "allow": ["warn", "log", "error"] }],
      "consistent-return": "error",
      "no-implicit-globals": "error",
      "prefer-template": "error",
    },
  },
  {
    files: ['**/*.{js,ts}'],
    plugins: {
      js,
      prettier: prettierPlugin,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      sourceType: 'commonjs',
    },
    rules: {
      ...js.configs.recommended.rules,
      'prettier/prettier': 'error',
    },
  },

  tseslint.configs.recommended,

  prettier,
]);
