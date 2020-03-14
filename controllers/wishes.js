const User = require('../models/User');
const Wishlist = require('../models/Wishlist');


async function create(req, res) {
  try { 
    const user = await User.findOne({ username: req.params.username }).populate('lists');
    const list = user.lists.find(list => (list.title === req.params.title));
    list.wishes.push(req.body.wish);
    list.save();
    res.status(204).send();
  } catch(err) {
    console.log(err);
    res.status(400).json({ name: err.name, message: err.message });
  }
}

async function update(req, res) {
  try { 
    const user = await User.findOne({ username: req.params.username }).populate('lists');
    const list = user.lists.find(list => (list.title === req.params.title));
    // list.wishes[req.body.index] = req.body.wish;
    list.wishes = [...list.wishes, req.body.wish]
    list.save();
    res.status(204).send();
  } catch(err) {
    console.log(err);
    res.status(400).json({ name: err.name, message: err.message });
  }
}

async function remove(req, res) {
  try { 
    const user = await User.findOne({ username: req.params.username }).populate('lists');
    const list = user.lists.find(list => (list.title === req.params.title));
    list.wishes.splice(req.body.index, 1);
    list.save();
    res.status(204).send();
  } catch(err) {
    console.log(err);
    res.status(400).json({ name: err.name, message: err.message });
  }
}

module.exports = { create, update, remove };
