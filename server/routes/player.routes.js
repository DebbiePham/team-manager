const PlayerController = require('../controllers/player.controller');


module.exports = function(app){
    app.get('/api/players', PlayerController.findAllPlayers);
    app.get('/api/players/:id', PlayerController.findOnePlayer);
    app.post('/api/players', PlayerController.createNewPlayer);
    app.put('/api/players/:id', PlayerController.updatePlayer);
    app.delete('/api/players/:id', PlayerController.deletePlayer);
    app.get('/api/player/random', PlayerController.getRandomPlayer);
}



