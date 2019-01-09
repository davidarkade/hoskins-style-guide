/* eslint-disable import/no-mutable-exports */
let configuration = {};

switch (process.env.NODE_ENV) {
  case 'production':
    configuration = require('./production.js').default;
    break;
  default: // development
    configuration = require('./development.js').default;
}

export default configuration;