var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let products=[{
    name:"IPHONE 11",
    Category:"Mobile",
    Description:" This is a good phone",
    image:"https://tse4.mm.bing.net/th?id=OIP.dxhe-R8HVyeS3kkSLwJz_AHaEK&pid=Api&P=0&w=280&h=157"
  },
  {
    name:"IPHONE 12",
    Category:"Mobile",
    Description:" This is a good phone",
    image:"https://tse1.mm.bing.net/th?id=OIP.aUIkBPRFVinemxWvu4qybQHaE8&pid=Api&P=0&w=273&h=182"
  },
  {
    name:"OPPO 10X",
    Category:"Mobile",
    Description:" This is a good phone",
    image:"https://tse1.mm.bing.net/th?id=OIP.Ojshl5pZeiNwfNOglC86BQHaFM&pid=Api&P=0&w=269&h=188"
  },
  {
    name:"REALME C11",
    Category:"Mobile",
    Description:" This is a good phone",
    image:"https://tse2.mm.bing.net/th?id=OIP.6d6ziEq6pXRcM3lMkGeB2gHaE6&pid=Api&P=0&w=255&h=169"
  },

]
  
  res.render('index',{products} );
});

// router.get('/', function(req, res, next) {
   
//  res.header('Cache-control','no-cache,private, no-store, must-revalidate,max-stale=0,post-check=0,pre-check=0');
//    if(req.session.login){
//        res.redirect('/index')
//    }else{
//  res.render('login',{'loginErr':req.session.loginErr});
//   req.session.loginErr=false;  
//  }

  
    
  
 
  
// });


// const username = 'ashina'
// const password = 'password'

// router.post('/submit',(req, res)=>{
//    res.header('Cache-control','no-cache,private, no-store, must-revalidate,max-stale=0,post-check=0,pre-check=0');
//   console.log(req.body)
//   const user= req.body.username
//   const pw = req.body.pw
// console.log(user)

//   if (user === username && pw === password){
//     req.session.login=true
//     res.redirect('/');
//   }else{
//     req.session.loginErr=true;
//     res.redirect('/login')
    

//   }

//   res.end()
// })
router.get('/logout',(req,res)=>{
  
  req.session.destroy();
  
  res.redirect('/')
});

module.exports = router;
