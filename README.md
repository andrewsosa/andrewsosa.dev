# andrewsosa/homepage
> My personal website: https://andrewsosa.com

## Built With
  - [Nuxt](https://nuxtjs.org/) – Universal Vue.js Applications
  - [Bulma](https://bulma.io) - Sass Flexbox framework.
  - [Eeyore](https://github.com/andrewsosa/eeyore) - My own Github pin grabber.
  - [Yarn](https://yarnpkg.com) – Better dependency management.
  - [Webpack](https://webpack.js.org/) - Javascript module bundler.
  - [Font Awesome](https://fontawesome.com/) - Wonderful icons.
  - [Pug](https://pugjs.org) - It's better than HTML!
  <!-- - [Travis CI](https://travis-ci.org/) – Continuous Integration & Deployment. -->

## Usage
I'm going to assume you want to customize the site and not just rehost this with my name and all.

First, [download the source](https://github.com/andrewsosa/homepage/archive/master.zip). Extract the files and navigate your shell to the folder.

You'll need to install the dependencies:
```sh
$ yarn
```

You can run the Nuxt development server as such:
```sh
$ yarn dev
```

To deploy:
```sh
# Create the static files in /dist
$ yarn generate

# Use push-dir to upload /dist to a gh-pages branch of your repo
$ yarn deploy
```


<!-- ## Contributing
Contributions are welcome! Please read both the [Getting Started](#) section and the [Contributing Guidelines](#) before submitting/requesting changes. -->


## License
MIT
