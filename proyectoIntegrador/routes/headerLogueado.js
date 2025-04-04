var express = require('express');
var router = express.Router();
const headerController= require('../controllers/headerController')


router.get('/',headerController.index)

module.exports = router;