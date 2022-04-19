const dotenv = require('dotenv');

const path = require('./environmentPath');

dotenv.config({ path });

module.exports = {
  uri: process.env['MESSAGES.MONGO.URI'],
  user: process.env['MESSAGES.MONGO.USER'],
  pass: process.env['MESSAGES.MONGO.PASS'],
  authSource: process.env['MESSAGES.MONGO.AUTH.SOURCE'],
};
