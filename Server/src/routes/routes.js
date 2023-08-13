const { Router } = require('express');
const createUser = require('../controllers/createUser')
const createMessage = require('../controllers/createMessage')

const router = Router();

router.get('/',(req,res)=>{
  console.log('Hi this is eduhub server')
  res.send('Hi this is eduhub server')
})

router.post('/signUp', createUser)
router.post('/sendMessage',createMessage)

module.exports = router;

