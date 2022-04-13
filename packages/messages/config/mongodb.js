const prefix = require('./environment');

module.exports = {
  uri: process.env[`${prefix}MESSAGES_MONGO_URI`],
  user: process.env[`${prefix}MESSAGES_MONGO_USER`],
  pass: process.env[`${prefix}MESSAGES_MONGO_PASS`],
  authSource: process.env[`${prefix}MESSAGES_MONGO_AUTH_SOURCE`],
};
