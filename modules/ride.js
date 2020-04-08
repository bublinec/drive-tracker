const mongoose = require("mongoose");

var rideSchema = new mongoose.Schema({
    distance: Number,
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    },
});

// export Pond model
module.exports = mongoose.model("Ride", rideSchema);