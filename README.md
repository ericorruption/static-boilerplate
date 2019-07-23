# Static Boilerplate

This is how I roll.

## Dependencies

[Node.js v10.0+](https://nodejs.org) (Preferably through the use of [NVM](https://github.com/creationix/nvm))

## Installing

Run `npm install` after cloning the project and navigating to the project folder in your terminal.

## Running

In the project folder type `npm start` to spin a local server with live reloading and asset processing.
You can also run `npm run serve` to cross browser test multiple browsers at the same time with the help of Browsersync.

## Deployment

When you're ready to deploy, you can generate a production-ready build by issuing
the `npm run build` command. You will have the generated assets inside the `dist` folder.

## Contributing

Fork it. Branch it. Push it. PR it.

## TODO

- image optimization preserves folder structure (is it really necessary?)
- enforce html style
- inline critical css
- continuous integration with Travis CI (or other service)
- stop using a css architecture? (no point)
- tests
