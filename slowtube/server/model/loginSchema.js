var mongoose = require('mongoose');
var bcrypt = require('bcrypt');



var LoginSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    passwordConf: {
        type: String,
        required: true
    }
});

LoginSchema.statics.authenticate = function(email,password,callback) {
    User.findOne({email: email}).exec(function(err, user) {
        if(err) {
            return callback(null, user);
        } else {
            return callback();
        }
    });
}

//hashing a password before saving it to the database

LoginSchema.pre('save', function(next) {
    var user = this;
    bcrypt.hash(user.password, 10, function(err,hash) {
        if(err) {
            return next(err);
        }
        user.password = hash;
        next();
    });
});

var User = mongoose.model('User', LoginSchema);
module.exports = User;