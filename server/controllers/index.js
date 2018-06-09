var models = require('../models');

module.exports = {
    
  product: {
    get: (req, res) => {
      models.product.get(req, (err, results)=>{
        if (err) {
          res.status(500).send(err);
        }
        res.send(results);
      });
    }
  },

  image: {
    get: (req, res) => {
      models.image.get(req, (err, results)=>{
        if (err) {
          res.status(500).send(err);
        }
        res.send(results);
      });
    }
  },
    
  recommendation: {
    get: (req, res) => {
      models.recommendation.get((err, results) => {
        if (err) {
          res.status(500).send(err);
        }
        res.send(results);
      })
    }
  },

  heart: {
    get: (req, res) => {
      models.heart.get((err, results)=>{
        if (err) {
          res.status(500).send(err);
        }
        res.send(results);
      });
    }
  },
    
  add_heart: {
    post: (req, res) => {
      models.add_heart.post((err, results)=>{
        if (err) {
          res.status(500).send(err);
        }
        res.sendStatus(201);
      });
    }
  },

  remove_heart: {
    post: (req, res) => {
      models.remove_heart.post((err, results)=>{
        if (err) {
          res.status(500).send(err);
        }
        res.SendStatus(201);
      });
    }
  }
};
