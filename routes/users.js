const router = require('express').Router();
const User = require('../models/User');

router.post('/', async (req, res) => {
  const user = await User.create(req.body.user);
  res.json({ user });
});

module.exports = router;
