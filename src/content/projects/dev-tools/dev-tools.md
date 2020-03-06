---
path: "/projects/dev-tools"
date: "2019-09-09"
title: "dev-tools: an ES6 dev setup script"
image: ./js.png
---

# my nodejs dev tools
[![npm version](https://badge.fury.io/js/%40andrewsosa%2Fdev-tools.svg)](https://badge.fury.io/js/%40andrewsosa%2Fdev-tools)


* __Github__: https://github.com/andrewsosa/dev-tools
* __npm__: https://www.npmjs.com/package/@andrewsosa/dev-tools


So you know how you always install the same tools every time you set up a Node.js workspace? Basically, this script will automate that.

## Usage
```bash
$ npx @andrewsosa/dev-tools [--react] | bash -
```

## About

A setup script to install:
* [**eslint**](https://npmjs.com/eslint)
    + [**eslint-plugin-import**](https://npmjs.com/eslint-plugin-import)
    + [**eslint-config-airbnb-base**](https://npmjs.com/eslint-config-airbnb-base)
    + [**eslint-config-airbnb**](https://npmjs.com/eslint-config-airbnb) _(react only)_
    + [**eslint-plugin-jsx-a11y**](https://npmjs.com/eslint-plugin-jsx-a11y) _(react only)_
    + [**eslint-plugin-react**](https://npmjs.com/eslint-plugin-react) _(react only)_
    + [**eslint-plugin-react-hooks**](https://npmjs.com/eslint-plugin-react-hooks) _(react only)_
* [**prettier**](https://npmjs.com/prettier)
    * [**eslint-config-prettier**](https://npmjs.com/eslint-config-prettier)
    * [**eslint-plugin-prettier**](https://npmjs.com/eslint-plugin-prettier)

Also creates config files:
* [**.editorconfig**](https://github.com/andrewsosa/dev-tools/blob/master/.editorconfig)
* [**.eslintrc.js**](https://github.com/andrewsosa/dev-tools/blob/master/.eslintrc.js)
* [**.prettierrc**](https://github.com/andrewsosa/dev-tools/blob/master/.prettierrc)
