/* eslint-disable quote-props */

module.exports = {
  'strict': 0,
  'array-bracket-spacing': ['error', 'never'],
  'arrow-body-style': 'off',
  'class-methods-use-this': 'off',
  'comma-dangle': ['error', 'never'],
  'func-names': 'off',
  'function-paren-newline': ['error', 'consistent'],
  'guard-for-in': 'off',
  'import/extensions': ['off', 'never'],
  'import/no-extraneous-dependencies': 'off',
  'import/no-unresolved': 'off',
  'indent': ['error', 2, {
    'VariableDeclarator': 2,
    'SwitchCase': 1
  }],
  'jsx-a11y/anchor-is-valid': 'warn',
  'jsx-a11y/click-events-have-key-events': 'warn',
  'jsx-a11y/label-has-for': 'warn',
  'jsx-a11y/mouse-events-have-key-events': 'warn',
  'jsx-a11y/no-noninteractive-element-interactions': 'warn',
  'jsx-a11y/no-static-element-interactions': 'warn',
  'jsx-quotes': ['error', 'prefer-single'],
  'linebreak-style': ['error', 'unix'],
  'max-len': ['error', 120],
  'max-params': ['error', 5],
  'multiline-ternary': ['error', 'never'],
  'no-param-reassign': ['error', { 'props': false }],
  'no-plusplus': ['error', { 'allowForLoopAfterthoughts': true }],
  'no-restricted-syntax': 'off',
  'no-trailing-spaces': ['error'],
  'no-underscore-dangle': 'off',
  'no-use-before-define': ['error', { 'functions': false, 'classes': false }],
  'one-var': 'off',
  'one-var-declaration-per-line': 'off',
  'prefer-const': ['error', { 'destructuring': 'any' }],
  'prefer-destructuring': ['error', {
    'VariableDeclarator': {
      'array': false,
      'object': true
    },
    'AssignmentExpression': {
      'array': false,
      'object': false
    }
  }],
  'react/jsx-one-expression-per-line': 0,
  'react/destructuring-assignment': 0,
  'react/no-this-in-sfc': 0,
  'react/jsx-curly-spacing': ['error', 'always'],
  'react/jsx-filename-extension': 'off',
  'react/jsx-max-props-per-line': ['error', { 'maximum': 2 }],
  'react/jsx-uses-react': 'warn',
  'react/jsx-uses-vars': 'warn',
  'react/jsx-wrap-multilines': ['error', {
    'declaration': 'parens-new-line',
    'assignment': 'parens-new-line',
    'return': 'parens-new-line',
    'arrow': 'parens-new-line',
    'condition': 'parens-new-line',
    'logical': 'parens-new-line',
    'prop': 'parens-new-line'
  }],
  'react/forbid-prop-types': 'off',
  'react/no-array-index-key': 'warn',
  'react/require-default-props': 'off',
  'react/sort-comp': ['error', {
    'order': [
      'static-methods',
      'lifecycle',
      '/^on.+$/',
      '/^(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
      'everything-else',
      '/^render.+$/',
      'render'
    ]
  }]
};

/* eslint-enable quote-props */
