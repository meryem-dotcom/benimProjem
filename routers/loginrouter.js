let express = require('express');
let router = express.Router();
let loginController = require('../controller/logincontroller');

router.get('/',loginController.loginGet);
router.post('/',loginController.loginPost);

module.exports = router;
