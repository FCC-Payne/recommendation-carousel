var controller = require ('./controllers');
var router = require('express').Router();

router.get('/product/id/:currentProduct', controller.product.get); //for the purpose of FEC, retrieves just the first item information
router.get('/image/product_id/:image', controller.image.get); 
router.get('/heart', controller.heart.get);
router.get('/recommendation', controller.recommendation.get); //deprecated

router.post('/add_heart/:productToAdd', controller.add_heart.post); 
router.post('/remove_heart/:productToRemove', controller.remove_heart.post);

module.exports = router;
