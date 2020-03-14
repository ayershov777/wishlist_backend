const router = require('express').Router();
const wishlistsCtrl = require('../controllers/wishlists');

router.get('/:username', wishlistsCtrl.index);
router.get('/:username/:title', wishlistsCtrl.show);
router.post('/:username', wishlistsCtrl.create);

module.exports = router;
