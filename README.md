# Static Boilerplate
This is how I roll. To get started:

* Install node
* `npm install`
* `gulp`
* Update CDN references if necessary
* Have fun!


## Available Gulp tasks
All tasks are executed writing `gulp [taskname]` on terminal. `gulp` triggers
the default task.

* `javascript`: concatenate and minify js
* `css`: compile less and minify css
* `serve`: start static webserver, watch and reload changes on files
* `default`: `serve` shortcut


## TODO
* improve docs, obviously.
* add spritesmith / svg sprite solution, jscs

## Gulp plugins and their purpose
* autoprefixer: vendor-prefix CSS
* minify-css: css optimizer / minifier
* file-include: pull js partials into other js files
* sass: compile Sass
* plumber: prevent errors from terminating file watching
* load-plugins: programatically load plugins
* browser-sync: webserver, cross browser, cross device testing and file watcher / reloader
* cssgrace: oldIE fallbacks like opacity and rgba support.
* postcss-import: import css files into sass
* webpack: bundle js modules

* jscs: enforce coding style on JS
