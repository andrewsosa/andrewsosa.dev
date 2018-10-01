# andrewsosa/homepage
> My personal website: https://andrewsosa.com

## Built With
  - [React](https://reactjs.org/) – Javascript UI framework.
  - [Bulma](https://bulma.io) - Sass Flexbox framework.
  - [Yarn](https://yarnpkg.com) – Better dependency management.
  - [Webpack](https://webpack.js.org/) - Javascript module bundler.

## Usage
I'm going to assume you want to customize the site and not just rehost this with my name and all.

First, [download the source](https://github.com/andrewsosa/homepage/archive/master.zip). Extract the files and navigate your shell to the folder.

You'll need to install the dependencies:
```sh
$ yarn
```

You can run the React development server:
```sh
$ yarn start
```

To deploy:
```sh
# Create the static files in /build
$ yarn build

# Use push-dir to upload /dist to a gh-pages branch of your repo
$ yarn deploy
```


<!-- ## Contributing
Contributions are welcome! Please read both the [Getting Started](#) section and the [Contributing Guidelines](#) before submitting/requesting changes. -->


## License
MIT
