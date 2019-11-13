const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var DevSchema = new Schema({
    username: {
        type: String
    },
    email: {
        type: String
    },
    specialization: {
        type: String
    },
    image: {
        data: Buffer,
        contentType: String
    }
});

var Devs = mongoose.model("DevSchema", DevSchema);

module.exports = Devs;