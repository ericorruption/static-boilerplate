# Static Boilerplate
This is how I roll. To get started:

* Install node
* `npm install`
* `npm start`
* Update CDN references if necessary
* Have fun!


## Available Gulp tasks
All tasks are executed writing `gulp [taskname]` on terminal. `gulp` triggers
the default task. You can use the local instance of gulp acessing `node_modules/.bin/gulp`.

* `javascript`: concatenate and minify js
* `css`: compile less and minify css
* `html`: minify html
* `images`: optimize images
* `build`: run all the tasks above
* `serve`: start static webserver, watch and reload changes on files
* `default`: `serve` shortcut


## TODO
* improve docs, obviously.
* add svg sprite solution
* enforce html / css coding style
* eslint: enforce coding style and linting on JS
* understand the inner workings of webpack
* static asset hashing
* inline critical css
* build for production (invalidate static assets, etc)

## Gulp plugins and their purpose
* autoprefixer: vendor-prefix CSS
* minify-css: css optimizer / minifier
* sass: compile Sass
* plumber: prevent errors from terminating file watching
* load-plugins: programatically load plugins
* browser-sync: webserver, cross browser, cross device testing and file watcher / reloader
* cssgrace: oldIE fallbacks like opacity and rgba support.
* postcss-import: import css files into sass
* webpack: bundle js modules
* imagemin: optimize images
* sourcemaps: sourcemap support
* minify-html: squish html files
