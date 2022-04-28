// External dependencies
const dotenv = require('dotenv');

// Internal dependencies
const path = require('./environment');

dotenv.config({ path });

module.exports = {
  uri: process.env['MESSAGES.MONGO.URI'],
  user: process.env['MESSAGES.MONGO.USER'],
  pass: process.env['MESSAGES.MONGO.PASS'],
  authSource: process.env['MESSAGES.MONGO.AUTH.SOURCE'],
};
