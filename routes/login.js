var express = require('express');
// const app = require('../app');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.header('Cache-control', 'no-cache,private, no-store, must-revalidate,max-stale=0,post-check=0,pre-check=0');
  if (req.session.login) {
    res.redirect('/index')
  } else {
    res.render('login', { 'loginErr': req.session.loginErr });
    req.session.loginErr = false;
  }

  
  // res.render('login');
});

const username = 'ashina'
const password = 'password'

router.post('/submit',(req, res)=>{
  console.log(req.body)
  const user= req.body.username
  const pw = req.body.pw
  if (user === username && pw === password){
    req.session.login=true
    res.redirect('/index');
  }else{
    res.redirect('/')
  }

  res.end()
})



module.exports = router;
