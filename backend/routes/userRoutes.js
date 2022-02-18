const { Router } = require('express')
const express = require('express')
const res = require('express/lib/response')
const {registerUser, loginUser, getUser} = require('../controllers/userController')
const {protect} = require('../middlewares/authMiddleware')

const router = express.Router()

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', protect, getUser)

module.exports = router