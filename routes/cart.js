var express = require('express');
const app = require('../app');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  
   let products=[{
    no:1,
    name:"IPHONE 11",
    Category:"Mobile",
    Description:" This is a good phone",
    image:"https://tse4.mm.bing.net/th?id=OIP.dxhe-R8HVyeS3kkSLwJz_AHaEK&pid=Api&P=0&w=280&h=157"
  },
  {
    no:2,
    name:"IPHONE 12",
    Category:"Mobile",
    Description:" This is a good phone",
    image:"https://tse1.mm.bing.net/th?id=OIP.aUIkBPRFVinemxWvu4qybQHaE8&pid=Api&P=0&w=273&h=182"
  },
  {
    no:3,
    name:"OPPO 10X",
    Category:"Mobile",
    Description:" This is a good phone",
    image:"https://tse1.mm.bing.net/th?id=OIP.Ojshl5pZeiNwfNOglC86BQHaFM&pid=Api&P=0&w=269&h=188"
  },
  {
    no:4,
    name:"REALME C11",
    Category:"Mobile",
    Description:" This is a good phone",
    image:"https://tse2.mm.bing.net/th?id=OIP.6d6ziEq6pXRcM3lMkGeB2gHaE6&pid=Api&P=0&w=255&h=169"
  },

]
  
  res.render( 'cart',{products});
});
module.exports = router;