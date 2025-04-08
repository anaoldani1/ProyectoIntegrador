var express = require('express');
var router = express.Router();
const mainController= require('../controllers/mainController')



router.get('/', mainController.index);
router.get('/search-results', mainController.searchResults);


module.exports = router;
