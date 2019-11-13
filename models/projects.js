var mongoose = require("mongoose");


var Schema = mongoose.Schema;

var ProjectSchema = new Schema({

    projectName: {
        type: String,
        trim: true,
        required: "Project Name is Required"
    },
    host: {
        type: String,
        trim: true,
        required: "Host is Required",
    },
    description: {
        type: String
    },
    languages: {
        type: String
    },
    availability: {
        type: Boolean
    }

});

var Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;