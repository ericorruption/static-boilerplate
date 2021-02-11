# Static Boilerplate [![Greenkeeper badge](https://badges.greenkeeper.io/ericorruption/static-boilerplate.svg)](https://greenkeeper.io/)

Lately I'd recommend jumping into something more stable depending on your requirements:
- Is it small / simple enough that it can be static? https://www.11ty.dev/
- Is it a web app using React? https://create-react-app.dev/
- Is it a wordpress project? Take a look at [Roots](https://roots.io/) and their tools.

This is how I roll.

## Dependencies

[Node.js v8.10.0+](https://nodejs.org) (Preferably through the use of [NVM](https://github.com/creationix/nvm))

## Installing

Run `npm install` after cloning the project and navigating to the project folder in your terminal.

## Running

In the project folder type `npm start` to spin a local server with live reloading and asset processing.

## Deployment

When you're ready to deploy, you can generate a production-ready build by issuing
the `npm run build` command. You will have the generated assets inside the `dist` folder.

## Contributing

Fork it. Branch it. Push it. PR it.

## TODO

- image optimization
- enforce html style
- static asset hashing
- inline critical css
- continuous integration with Travis CI
