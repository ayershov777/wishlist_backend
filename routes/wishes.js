const router = require('express').Router();
const wishesCtrl = require('../controllers/wishes');

router.post('/:username/:title', wishesCtrl.create);
router.put('/:username/:title', wishesCtrl.update);
router.delete('/:username/:title', wishesCtrl.remove);

module.exports = router;
