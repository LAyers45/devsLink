var mongoose = require("mongoose");


var Schema = mongoose.Schema;


var UserSessionSchema = new Schema({
    userId: {
        type: String,
        defualt: ""
    },
    timestamp: {
        type: Date,
        default: Date.now()
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
});

var UserSession = mongoose.model("UserSession", UserSessionSchema);

// Export the User model

module.exports = UserSession;

