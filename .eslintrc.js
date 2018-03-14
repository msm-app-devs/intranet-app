module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  plugins: [
    'ember'
  ],
  extends: [
    'eslint:recommended',
    'plugin:ember/recommended'
  ],
  env: {
    browser: false
  },
  globals: {
    'server': true,
    'module': false,
    'moment': false,
  },
  rules: {
    'ember/new-module-imports': 0,
    'ember/closure-actions': 0,
    'ember/avoid-leaking-state-in-ember-objects': 0
  }
};
