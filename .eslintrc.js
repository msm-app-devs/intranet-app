module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  extends: 'ember',
  env: {
    browser: true,
    es6: true
  },
  rules: {
  },
  globals: {
    module: false,
    moment: false,
    server: true
  }
};
