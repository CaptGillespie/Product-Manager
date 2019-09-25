const controller = require('./controller');

module.exports = function (app){
    app.get('/api/restaurant', controller.allRestaurants)
    app.post('/api/restaurant', controller.createRestaurant)
    app.get('/api/restaurant/:id', controller.oneRestaurant)
    app.delete('/api/restaurant/:id', controller.deleteRestaurant)
    app.put('/api/restaurant/:id', controller.updateRestaurant)
    // One To Many Route****
    app.patch('/api/restaurant/:id', controller.addReview)
    app.delete('/api/restaurant/:id', controller.deleteReview)
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
      });
}