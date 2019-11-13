var mongoose = require("mongoose");
const bcrypt = require("bcryptjs")
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: {
        type: String,
        trim: true,
        unique: true,
        required: "Username is Required"
    },
    password: {
        type: String,
        trim: true,
        required: "Password is Required",
        validate: [
            function (input) {
                return input.length >= 6;
            },
            "Password should be longer."
        ]
    },
    email: {
        type: String,
        unique: true,
        required: "email is Required",
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },
    userCreated: {
        type: Date,
        default: Date.now
    },
    specialization: {
        type: String,
        trim: true
    },
    github: { type: String },
    website: { type: String }
});

UserSchema.methods = {
    passHash: plainTextPassword => {
        return bcrypt.hashSync(plainTextPassword, 10)
    },
    passwordConfirm: function (password) {
        return bcrypt.compareSync(password, this.password)
    }

}

UserSchema.pre('save', function (next) {
    this.password = this.passHash(this.password)
    next()


})

var User = mongoose.model("User", UserSchema);

module.exports = User;
