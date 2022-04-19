const { join } = require('path');

const { supportedEnvs } = require('../src/utils/constants');

let path;
const filename = '.env.';

if (process.env.NODE_ENV === supportedEnvs.PRODUCTION) {
  path = `/src/${filename}${process.env.NODE_ENV}`;
} else {
  path = `${join(__dirname, '../../..')}/${filename}${process.env.NODE_ENV}`;
}

module.exports = path;
