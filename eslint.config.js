const js = require("@eslint/js");
const globals = require("globals");

module.exports = [
  {
    ignores: ["eslint.config.js", "coverage/*"]
  },
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",
      globals: {
        ...globals.node,
        ...globals.jest
      }
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off"
    }
  }
];