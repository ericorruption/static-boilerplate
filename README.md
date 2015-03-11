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
* add spritesmith, jscs

## Gulp plugins and their purpose
* autoprefixer: vendor-prefix CSS
* csso: css optimizer / minifier
* file-include: pull js partials into other js files
* less: compile LESS
* uglify: compile JS
* rename: rename files on stream
* plumber: prevent errors from terminating file watching
* load-plugins: programatically load plugins
* browser-sync: webserver, cross browser, cross device testing and file watcher / reloader

* spritesmith: generate sprites
* jscs: enforce coding style on JS
