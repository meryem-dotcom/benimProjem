let express = require('express');
let router = express.Router();
let hakkimdaController = require('../controller/hakkimdacontroller');

router.get('/',hakkimdaController.hakkimdaGet);

module.exports = router;
