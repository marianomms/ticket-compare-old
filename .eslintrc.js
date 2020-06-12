const eslintRules = require('./config/.eslint/eslintrc.rules');
const eslintTypeScriptRules = require('./config/.eslint/eslint.typescript.rules');

function eslintConfigGenerator() {
  return {
    'env': {
      'browser': true,
      'es6': true
    },
    'extends': [
      "eslint:recommended",
      "plugin:react/recommended",
      'airbnb',
      'airbnb/hooks',
      "plugin:eslint-comments/recommended",
      "plugin:jest/all"
    ],
    "globals": {},
    "parser": "babel-eslint",
    "plugins": [
      "jest",
      "react",
      "react-hooks"
    ],
    'overrides': [{
      'files': [
        '*.ts',
        '*.tsx'
      ],
      extends: [
        "airbnb-typescript",
        // "airbnb/hooks", => TODO: Check if is needed
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking"
      ],
      parserOptions: {
        project: './tsconfig.json'
      },
      "rules": eslintTypeScriptRules
    }],
    "rules": eslintRules
  };
}

module.exports = eslintConfigGenerator();
