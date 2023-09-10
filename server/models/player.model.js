const mongoose = require('mongoose');



const PlayerSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: [true, "Name is required"],
        minlength: [2, "Name must be at least 2 characters"],
    },

    position: {
        type: String
    },

    status: {
        type: String,
        enum: ['Playing', 'Not Playing', 'Undecided']
    }
    
}, { timestamps: true }); // this automatically give createdAt and updatedAt
module.exports.Player = mongoose.model('Player', PlayerSchema);

