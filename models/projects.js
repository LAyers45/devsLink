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
    // `email` must be of type String
    // `email` must be unique
    // `email` must match the regex pattern below and throws a custom error message if it does not
    // You can read more about RegEx Patterns here https://www.regexbuddy.com/regex.html
    dev1: {
        type: String,
        unique: true
    },
    // `date` must be of type Date. The default value is the current date
    dev2: {
        type: String,
        unique: true
    },
    dev3: {
        type: String,
        unique: true
    },
    projectImage:
    {
        data: Buffer, contentType: String
    },
    description:
    {
        type: String
    }

});

// This creates our model from the above schema, using mongoose's model method
var Project = mongoose.model("Project", ProjectSchema);

// Export the User model
module.exports = Project;