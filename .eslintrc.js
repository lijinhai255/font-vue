module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/standard'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always', // Require a space for anonymous functions
        named: 'never', // Disallow space for named functions
        asyncArrow: 'always' // Require a space for async arrow functions
      }
    ]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
