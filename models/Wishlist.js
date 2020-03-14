const mongoose = require('mongoose');

const wishlistSchema = new mongoose.Schema({
  title: String,
  wishes: [String]
});

module.exports = mongoose.model('Wishlist', wishlistSchema);
