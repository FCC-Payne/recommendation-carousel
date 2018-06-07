var controller = require ('./controllers');
var router = require('express').Router();

router.get('/product1', controller.product.get); //for the purpose of FEC, retrieves just the first item information
router.get('/image', controller.image.get); 
router.get('/heart', controller.heart.get);
router.get('/recommendation', controller.recommendation.get); //for product 1

router.post('/add_heart', controller.add_heart.post); //unused for this project
router.post('/remove_heart', controller.remove_heart.post); //unused for this project

module.exports = router;
