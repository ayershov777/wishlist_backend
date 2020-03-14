const User = require('../models/User');
const Wishlist = require('../models/Wishlist');

async function index(req, res) {
  try {
    const user = await User.findOne({ username: req.params.username }).populate('lists');
    res.json({ user });
  } catch(err) {
    console.error(err);
    res.status(400).send({ name: err.name, message: err.message });
  }
}

async function create(req, res) {
  try {
    const wishlist = await Wishlist.create({ title: req.body.title });
    await User.findOneAndUpdate(
      { username: req.params.username },
      { $push: { lists: wishlist }},
      { new: true }
    );
    res.status(201).send('ok');
  } catch(err) {
    console.error(err);
    res.status(400).send({ name: err.name, message: err.message });
  }
}

async function show(req, res) {
  console.log('test')
  try {
    const user = await User.findOne({ username: req.params.username }).populate('lists');
    const list = user.lists.find(list => (list.title === req.params.title));
    res.json({ list })
  } catch(err) {
    console.error(err);
    res.status(400).send({ name: err.name, message: err.message });
  }
}

module.exports = { index, create, show };
