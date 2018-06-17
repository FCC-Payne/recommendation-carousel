var db = require('../../database/database.js');
const port = process.env.PORT || 3004

module.exports = {
    
  product: {
    get: function (req, callback) {
      var queryProducts = `SELECT * FROM products LEFT JOIN (recommendation, images) ON (recommendation.id = products.recommendation_id AND images.id = products.images_id) WHERE products.id = ${req.params.currentProduct}`;
      db.query(queryProducts, (err, results) => {
        callback(err, results);
      });
    }
  },
    
  image: {
    get: function (req, callback) {
      var queryImage = `SELECT * FROM images LEFT JOIN products ON products.id = images.product_id WHERE product_id = ${req.params.image}`;
      db.query(queryImage, (err, results) => {
        callback(err, results);
      });
    }
  },
    
  recommendation: {
    get: function (callback) {
      var queryRecommendation = 'SELECT * FROM products LEFT JOIN (recommendation) ON (recommendation.id = products.recommendation_id) WHERE products.id = 1';
      db.query(queryRecommendation, (err, results) => {
        if (err) {
          callback(err, null);
        } else {
          callback(null, results);
        }
      });
    }
  },
    
  heart: {
    get: function (callback) {
      var queryHeart = 'SELECT * FROM products'; //heart is inside products table
      db.query(queryHeart, (err, results) => {
        callback(err, results);
      });
    }
  },

  add_heart: {
    post: function (req, callback) {
        console.log('posted: ', req.params)
      var queryHeart = `UPDATE products SET my_heart = '1' WHERE id = ${req.params.productToAdd}`; //= 'SELECT * FROM images LEFT JOIN products ON products.id = images.product_id;'
      //somehow change the specific my_heart from 0 to 1
      db.query(queryHeart, (err, results) => {
        callback(err, results);
      });
    }
  },

  remove_heart: {
    post: function (req, callback) {
        console.log('posted to remove', req.params)
        var queryHeart = `UPDATE products SET my_heart = '0' WHERE id = ${req.params.productToRemove}`; //change my_heart from 1 to 0
      db.query(queryHeart, (err, results) => {
        callback(err, results);
      });
    }
  }
};
