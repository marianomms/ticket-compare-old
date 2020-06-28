/* eslint-disable quote-props */

const eslintRules = require('./eslintrc.rules');

function eslintConfigGenerator() {
  const rules = {
    "@typescript-eslint/naming-convention": [
      "error",
      {
        "selector": "default",
        "format": ["camelCase"]
      },
      {
        "selector": "interface",
        "format": ["PascalCase"],
        "prefix": ["I"]
      },
      {
        "selector": "variable",
        "format": ["PascalCase", "camelCase", "UPPER_CASE"]
      },
      {
        "selector": "parameter",
        "format": ["camelCase"],
        "leadingUnderscore": "allow"
      },

      {
        "selector": "memberLike",
        "modifiers": ["private"],
        "format": ["camelCase"],
        "leadingUnderscore": "require"
      },

      {
        "selector": "typeLike",
        "format": ["PascalCase"]
      }
    ],
    "react/prop-types": 0
  };

  return { ...eslintRules, ...rules };
}

module.exports = eslintConfigGenerator();
/* eslint-enable quote-props */
