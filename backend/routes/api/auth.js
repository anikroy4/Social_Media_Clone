const express = require('express');
const router = express.Router();
const { user } = require('../../controllers/userControllers');


router.post('/', user);

module.exports = router;