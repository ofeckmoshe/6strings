const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

require('dotenv').config();

const userSchema =mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        required: true,
        minlength: 5
    },
    name: {
        type: String,
        required: true,
        maxlength: 100
    },
    lastname: {
        type: String,
        required: true,
        maxlength: 100
    },
    cart: {
        type: Array,
        default: []
    },
    history: {
        type: Array,
        default: []
    },
    role: {
        type: Number,
        default: 1
    },
    token: {
        type: String
    }
});

userSchema.pre('save',function(next){
    var user = this;

    if(user.isModified('password')){
        bcrypt.genSalt(10,function(err,salt){
            if(err) return next(err);
    
            bcrypt.hash(user.password,salt,function(err,hash){
                if(err) return next(err);
                user.password = hash;
                next();
            });
        })
    } else{
        next();
    }
})

userSchema.methods.comparePassword = function(currentPassword, callback){
    bcrypt.compare(currentPassword, this.password, function(err, isMatch){
        if(err) return callback(err);
        callback(null, isMatch);
    });
}

userSchema.methods.generateToken = function(callback){
    var user = this;
    var token = jwt.sign(user._id.toHexString(), process.env.SECRET_PASSWORD);

    user.token = token;
    user.save(function(err, user) {
        if (err) return callback(err);
        callback(null, user);
    });
}

userSchema.statics.findByToken = function(token, callback) {
    var user = this;

    jwt.verify(token, process.env.SECRET_PASSWORD, function(err, decode){
        user.findOne({ '_id': decode, 'token': token }, function(err, user) {
            if(err) return callback(err);
            callback(null, user);
        });
    });
};

const User = mongoose.model('User', userSchema);

module.exports = { User };