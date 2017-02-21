# Static Boilerplate

[![Greenkeeper badge](https://badges.greenkeeper.io/ericorruption/static-boilerplate.svg)](https://greenkeeper.io/)
This is how I roll. To get started:

* Install [node.js](nodejs.org)
* `npm install`
* `npm start`
* Have fun!


## Available Gulp tasks
All tasks are executed writing `gulp [taskname]` on terminal. `gulp` triggers
the default task. You can use the local instance of gulp accessing `node_modules/.bin/gulp`.

* `javascript`: lint, transpile, concatenate and minify js
* `css`: compile sass and minify css. generates sourcemaps
* `html`: lint html, then minify if it passes the linting
* `images`: optimize images
* `build`: run all the tasks above
* `serve`: start static webserver, watch and reload changes on files
* `default`: `serve` shortcut


## TODO
* improve docs, obviously.
* add svg sprite solution
* enforce html / css coding style
* static asset hashing
* inline critical css
* continuous integration with Travis CI


## modules and their purpose
* autoprefixer: vendor-prefix CSS
* cssnano: css optimizer / minifier
* sass: compile Sass
* plumber: prevent errors from terminating file watching
* browser-sync: webserver, cross browser, cross device testing and file watcher / reloader
* eslint: js linting
* postcss-import: import css files into sass
* browserify (+ vinyl source stream and buffer): bundle js modules
* babelify: browserify transform to transpile ES6 code
* uglify: minify js
* imagemin: optimize images
* sourcemaps: sourcemap support
* htmlmin: squish html files
* html5-lint: lint html according to w3c validator
