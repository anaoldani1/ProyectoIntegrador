const express = require('express');
const router = express.Router();
const profileController = require("../controllers/profileController");

router.get('/', profileController.index); ///Modularizar el sistema de ruteo


module.exports = router;