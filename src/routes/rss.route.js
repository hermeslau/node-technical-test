const controller = require('../controllers/rss.controller');

module.exports = function(app){
    //Routing to different endpoints
    app.get('/', controller.displayEpisodes)
    app.get('/sort', controller.getRssSort)
}