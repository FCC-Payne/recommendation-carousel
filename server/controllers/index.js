var models = require('../models');

module.exports = {

    image: {
        get: (req, res) => {
            models.image.get((err, results)=>{
                if (err) {
                    throw err;
                }
                res.send(results);
            });
        }
    },
    
    product: {
        get: (req, res) => {
            models.product.get((err, results)=>{
                if (err) {
                    throw err;
                }
                res.send(results);
            });
        }
    },
    
    recommendation: {
        get: (req, res) => {
            models.recommendation.get((err, results) => {
                if (err) {
                    throw err;
                }
                res.send(results);
            })
        }
    },

    heart: {
        get: (req, res) => {
            models.heart.get((err, results)=>{
                if (err) {
                    throw err;
                }
                res.send(results);
            });
        }
    },
    
    add_heart: {
        post: (req, res) => {
            models.add_heart.post((err, results)=>{
                if (err) {
                    throw err;
                }
                res.sendStatus(201);
            });
        }
    },

    remove_heart: {
        post: (req, res) => {
            models.remove_heart.post((err, results)=>{
                if (err) {
                    throw err;
                }
                res.SendStatus(201);
            });
        }
    }
};