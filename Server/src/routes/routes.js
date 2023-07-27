const { Router } = require('express');

const router = Router();

router.get('/',(req,res)=>{
  console.log('Hi this is eduhub server')
  res.send('Hi this is eduhub server')
})

module.exports = router;

