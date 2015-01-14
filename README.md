# Static Boilerplate
This is how I roll. To get started:

* Install node
* Install grunt-cli
* Install bower
* `npm install`
* `grunt`
* Update jQuery reference if necessary
* Have fun!


## Available Grunt tasks
All tasks are executed writing `grunt [taskname]` on terminal. `grunt` triggers
the default task.

* `javascript`: concatenate and minify js
* `css`: compile less and minify css
* `build`: generate sprites and trigger the two tasks above
* `setup`: install dependencies and trigger `build`
* `serve`: start static webserver, watch and reload changes on files
* `default`: setup + serve


## TODO
* grunt deploy task
* improve docs, obviously.


## Grunt plugins and their purpose
* autoprefixer: vendor-prefix CSS
* connect: static server
* copy: copy to dist folder
* less: compile LESS
* uglify: compile JS
* watch: watch for file changes
* csso: css optimizer / minifier
* include-replace: pull js partials into other js files
* newer: only run task on changed files
* shell: call bower
* spritesmith: generate sprites
* load-grunt-tasks: programatically load tasks
