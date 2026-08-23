import next from "eslint-config-next";

// ESLint checks the project for common JavaScript and React mistakes.
/** @type {import("eslint").Linter.Config[]} */
const config = [
  {
    ignores: ["**/node_modules/**"],
  },
  ...next,
  {
    rules: {
      // Portfolio copy uses apostrophes, so this rule is not useful here.
      "react/no-unescaped-entities": "off",
    },
  },
];

export default config;
