var express = require('express');
// const app = require('../app');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  
  res.render('login');
});

const username = 'ashina'
const password = 'password'

router.post('/submit',(req, res)=>{
  console.log(req.body)
  const user= req.body.username
  const pw = req.body.password
  if (user === username && pw === password){
    req.session.login=true
    res.redirect('/login');
  }else{
    res.redirect('/')
  }

  res.end()
})



module.exports = router;
