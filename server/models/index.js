var db = require('../../database/database.js');

module.exports = {
    
  product: {
    get: function (callback) {
      var queryProducts = 'SELECT * FROM products LEFT JOIN (recommendation, images) ON (recommendation.id = products.recommendation_id AND images.id = products.images_id) WHERE products.id = 1';
      db.query(queryProducts, (err, results) => {
        callback(err, results);
      });
    }
  },
    
  image: {
    get: function (callback) {
      var queryImage = 'SELECT * FROM images LEFT JOIN products ON products.id = images.product_id WHERE product_id = 1';
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
    post: function (callback) {
      var queryHeart; //= 'SELECT * FROM images LEFT JOIN products ON products.id = images.product_id;'
      //somehow change the specific my_heart from 0 to 1
      db.query(queryHeart, (err, results) => {
        callback(err, results);
      });
    }
  },

  remove_heart: {
    post: function (callback) {
      var queryHeart; //change my_heart from 1 to 0
            
      db.query(queryHeart, (err, results) => {
        callback(err, results);
      });
    }
  }
};
