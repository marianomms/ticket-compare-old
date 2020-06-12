/* eslint-disable quote-props */

const eslintRules = require('./eslintrc.rules');

function eslintConfigGenerator() {
  const rules = {

  };

  return { ...eslintRules, ...rules };
}

module.exports = eslintConfigGenerator();
/* eslint-enable quote-props */
