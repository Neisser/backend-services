const { Schema } = require('mongoose');

const connection = require('../drivers/mongodb/connection');

const Message = new Schema({
  fromUserId: {
    type: Number,
    required: true,
  },

  toUserId: {
    type: Number,
    required: true,
  },
  message: {
    type: String,
    lowercase: true,
    trim: true,
  },

}, { timestamps: true });

module.exports = connection.model('message', Message);
