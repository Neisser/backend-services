const Mongoose = require('mongoose');

const config = require('../../../config/mongodb');
const Logger = require('../../utils/logger');

Mongoose.Promise = global.Promise;

const db = Mongoose.createConnection(config.uri, {
  authSource: config.authSource,
  auth: {
    username: config.user,
    password: config.pass,
  },
});

db.on('error', (err) => {
  Logger.error(`[mongodb]: Connection error event ${err.message}`);
  process.exit(1);
});

db.once('open', () => Logger.info('[mongodb]: Connection oppened'));
db.once('connected', () => Logger.debug('[mongodb]: Client connection oppened'));
db.once('disconnected', () => Logger.debug('[mongodb]: Client was disconnected'));

process.on('SIGINT', () => {
  db.close(() => {
    Logger.info('[mongodb]: Connection was forced to be disconnected');

    process.exit(1);
  });
});

module.exports = db;
