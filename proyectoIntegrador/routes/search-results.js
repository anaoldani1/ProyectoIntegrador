const express = require('express');
const router = express.Router();
const searchResultsController = require('../controllers/search-resultsController')

router.get('/', searchResultsController.index);

module.exports = router;