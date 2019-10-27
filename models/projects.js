var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var ProjectSchema = new Schema({
    // `username` must be of type String
    // `username` will trim leading and trailing whitespace before it's saved
    // `username` is a required field and throws a custom error message if not supplied
    projectName: {
        type: String,
        trim: true,
        required: "Project Name is Required"
    },
    // `password` must be of type String
    // `password` will trim leading and trailing whitespace before it's saved
    // `password` is a required field and throws a custom error message if not supplied
    // `password` uses a custom validation function to only accept values 6 characters or more
    host: {
        type: String,
        trim: true,
        required: "Host is Required",
    },
    description:
    {
        type: String
    },
    languages:
    {
        type: String
    },
    availability:
    {
        type: Boolean
    }

});

// This creates our model from the above schema, using mongoose's model method
var Project = mongoose.model("Project", ProjectSchema);

// Export the User model
module.exports = Project;