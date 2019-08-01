let express = require('express');
let router = express.Router();
let mailController = require('../controller/mailcontroller');

router.get('/',mailController.mailGet);
router.post('/',mailController.mailPost);

module.exports = router;
