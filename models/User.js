const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true
  },
  lists: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Wishlist'
  }]
});

module.exports = mongoose.model('User', userSchema);
