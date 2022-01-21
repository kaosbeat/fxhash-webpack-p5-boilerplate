<img src="https://p5js.org/assets/img/p5js.svg" style="margin-top:20px;" width="100" alt="p5js">

FXHASH Generative Token webpack boilerplate with p5js
================

A boilerplate to automate and ease the creation of Generative Tokens on fxhash with [p5js](https://p5js.org/)

Original boilerplate: https://github.com/fxhash/fxhash-webpack-boilerplate

# How to use

You will need to have [nodejs](https://nodejs.org/) installed.

## Installation

> First, make sure that your node version is >= 14

Clone the repository on your machine and move to the directory
```sh
$ git clone https://github.com/TheodoreChe/fxhash-webpack-p5-boilerplate.git your_folder && cd your_folder
```

Install the packages required for the local environment
```sh
$ npm i
```

## Put your code in the `./src/scetch.js` file

## Start local environment

```sh
$ npm start
```

Open [http://localhost:8080](http://localhost:8080) to see your project in the browser.

## Build

```sh
$ npm run build
```

Will bundle your js dependencies into a single minified `bundle.js` file, move your files from the `public/` to the `dist/` folder, and link the `bundle.js` with the `index.html`.

**Moreover, it will create a `dist-zipped/project.zip` file which can be directly imported on fxhash**.
