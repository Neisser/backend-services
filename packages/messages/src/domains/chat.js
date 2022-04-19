const { Schema, ObjectId } = require('mongoose');

const connection = require('../drivers/mongodb/connection');
const Message = require('./message');

const Chat = new Schema({
  hostId: {
    type: Number,
    required: true,
  },

  customerId: {
    type: Number,
    required: true,
  },

  messagesId: {
    type: [ObjectId],
    required: true,
    default: undefined,
    ref: Message,
  },

  placeId: {
    type: Number,
    required: true,
  },
}, { timestamps: true });

module.exports = connection.model('chat', Chat);
