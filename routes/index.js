var express = require('express');
var router = express.Router();

/* GET Express page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Index page' });
});

/* GET error page. */
router.get('/error', function(req, res, next) {
  res.render('error', { message: 'Error page' });
});


/* GET product page. */
router.get('/product', function(req, res) {
  res.render('product', { 
    title: 'Product selection GET', 
    type: req.query.type , 
    color: req.query.color,  
  });
});


router.post('/product', function(req, res) {
  res.render('confirmation', { 
    title: 'Confirmation de commande POST', 
    type: req.body.type , 
    color: req.body.color,  
  });
});


/* GET form page. */
router.get('/form', function(req, res, next) {
  console.log("Accessing form");
  res.render('form', { 
    title: 'Formulaire de création de compte', 
  });
});


router.post('/form', function(req, res) {
  var newAccount = {
    name: req.body.name , 
    firstname: req.body.firstname, 
    phone: req.body.phone, 
    email: req.body.email,  
    password1: req.body.password1, 
    password2: req.body.password2, 
  };
  console.log(newAccount);
  res.render('form', { 
    title: 'Formulaire de création de compte', 
    userValue: newAccount,
  });
});


router.get('/shop', function(req, res, next) {
  res.render('shop', { 
  title: "Le Sushi Restaurant" ,
  products: [
    { name:"Maki Sushi", 
      image:"images/sushi-1.jpg", 
      price:"9", 
      quantity:"25"
    }, 
    { name:"Tuna Laguna", 
      image:"images/sushi-2.jpg", 
      price:"8", 
      quantity:"15"
    },
    { name:"Egg Roll", 
      image:"images/sushi-3.png", 
      price:"9", 
      quantity:"30"
    },  
  ] });
});

module.exports = router;
