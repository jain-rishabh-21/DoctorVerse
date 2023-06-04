module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  extends: 'standard',
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    indent: [
      2,
      2
    ],
    quotes: [
      2,
      'single'
    ],
    'linebreak-style': [
      2,
      'unix'
    ],
    semi: [
      2,
      'always'
    ],
    'no-console': 0,
    'no-inner-declarations': [
      2,
      'both'
    ],
    curly: 2
  }
};
