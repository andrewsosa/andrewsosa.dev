---
path: "/projects/eeyore"
date: "2018-06-10"
title: "Eeyore: npm module to fetch Github pins"
image: ./eeyore.jpg
---

# eeyore
* __Github__: https://github.com/andrewsosa/eeyore
* __npm__: https://www.npmjs.com/package/eeyore

## Why?

I wanted to automagically pull my Github pinned repos so they could go on my website. That worked until I had more than 6 things I wanted to have on my site.


## Installation

```bash
# npm
npm i eeyore

# yarn
yarn add eeyore
```


## Usage

```javascript
const eeyore = require('eeyore');

eeyore('<github_username>').then(repos => {
    // repos = [ ... ]
});
```


<br />

###### Example

```javascript
eeyore('andrewsosa').then(console.log)

/*
 [ { repo: 'Contest-Server',
    owner: 'FSU-ACM',
    description: 'Flask suite for running Fall/Spring Programming Contests',
    language: 'Python',
    color: '#3572A5',
    stars: '1',
    forks: '1',
    origin: undefined },
  { repo: 'hackfsu_com',

    ...

    origin: undefined } ]
    */
```
