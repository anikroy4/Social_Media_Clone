const express = require('express');
const router = express.Router();
const { user, verifiedUser, loginUser } = require('../../controllers/userControllers');


router.post('/', user);
router.post('/activate', verifiedUser);
router.post('/login', loginUser);

module.exports = router;