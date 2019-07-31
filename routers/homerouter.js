let express = require('express');
let router = express.Router();
let homeController = require('../controller/homecontroller');

router.get('/',homeController.homeGet);
router.post('/',homeController.homePost);

module.exports = router;
