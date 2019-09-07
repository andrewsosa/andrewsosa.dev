module.exports = {
  extends: [
    'airbnb',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
  ],
  parser: 'babel-eslint',
  plugins: ['prettier'],
  env: {
    browser: true,
    jest: true,
    es6: true,
  },
  rules: {
    'no-console': 'off',
    'prettier/prettier': 'error',
    'react/prop-types': 'off',
  },
};
