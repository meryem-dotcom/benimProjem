let express = require('express');
let router = express.Router();
let okuController = require('../controller/okucontroller');

router.get('/',okuController.okuGet);

module.exports = router;
