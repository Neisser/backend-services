<<<<<<< HEAD
// External dependencies
const Winston = require('winston');

// Setup
const logger = Winston.createLogger({
  format: Winston.format.json(),
  transports: [
    new Winston.transports.Console(),
  ],
=======
const Winston = require('winston');

const logger = Winston.createLogger({
  format: Winston.format.json(),
>>>>>>> fix(db-messages): env variables modiied, and add authSource option
});

module.exports = logger;
