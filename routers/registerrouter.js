let express = require('express');
let router = express.Router();
let registerController = require('../controller/registercontroller');

router.get('/',registerController.registerGet);
router.post('/',registerController.registerPost);

module.exports = router;
