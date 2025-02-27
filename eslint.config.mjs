import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {languageOptions: { globals: globals.browser }}, {ignores: ["**/*.test.js", "**/*.spec.js", "babel.config.js"]},
  pluginJs.configs.recommended,
];