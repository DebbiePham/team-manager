const { Player } = require('../models/player.model');

module.exports.findAllPlayers = (req, res) => {
    Player.find()
        .then((allPlayers) => {
            res.json( allPlayers );
        })
        .catch((err) => {
            res.status(400).json(err);
        });
}

module.exports.findOnePlayer = (req, res) => {
    Player.findOne({ _id: req.params.id })
        .then(oneSinglePlayer => {
            res.json({ player: oneSinglePlayer });
        })
        .catch((err) => {
            res.status(400).json(err);
        });
}

module.exports.createNewPlayer = (req, res) => {
    Player.create(req.body)
        .then((newCreatedPlayer) => {
            res.json(newCreatedPlayer);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
};

module.exports.updatePlayer = (req, res) => {
    Player.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedPlayer => {
            res.json({ updatedPlayer });
        })
        .catch((err) => {
            res.status(400).json(err);
        });
};

module.exports.deletePlayer = (req, res) => {
    Player.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result });
        })
        .catch((err) => {
            res.status(400).json(err);
        });
};

// function to get a random player
module.exports.getRandomPlayer = (req, res) => {
    Player.find()
    .then((allPlayers) => {
        const playersLength = allPlayers.length;
        const randomIndex = Math.floor(Math.random() * playersLength);
        const randomPlayer = allPlayers[randomIndex];
        res.json({ player: randomPlayer })
    })
    .catch((err) => {
        res.json(err)
    });
}