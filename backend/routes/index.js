const express = require('express');
const router = express.Router();
const api= require('./api/index')

const baseApiUrl = process.env.BASE_API_URL ; 
router.use(baseApiUrl, api);

  module.exports = router;