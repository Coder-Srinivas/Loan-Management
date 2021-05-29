const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// User Schema 
const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        dropDups: true
    },
    password: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true,
        unique: true,
        dropDups: true
    },
    address: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        dropDups: true
    },
    tokens: [{
        token: {
            type: String
        }
    }]
}, {
    timestamps: true
});

UserSchema.virtual('loans', {
    ref: 'Loan',
    localField: '_id',
    foreignField: 'owner'
})

/*
Below code runs before the user is saved. 
It hashes the password if the password is changed. 
*/
UserSchema.pre('save', async function(next){
    const user = this
    if(!user.isModified('password')){
        next();
        return;
    }
    user.password = await bcrypt.hash(user.password, 8);
    next();
})

// Generates a json web token
UserSchema.methods.generateAuthToken = async function() {
    const user = this;
    const token = jwt.sign({id: user._id}, process.env.SECRET, {expiresIn: '7d'});
    user.tokens = user.tokens.concat({token});
    await user.save();
    return token;
}

// Generates a profile by removing sensitive information
UserSchema.methods.getPublicProfile = function() {
    const user = this.toObject();
    delete user["password"];
    delete user["tokens"];
    return user;
}

UserSchema.statics.findByCredentials = async (params) => {
    const {email, password} = params;
    const user = await User.findOne({email});
    
    if(!user){
        throw new Error("Sorry the credentials you entered do not match. Please try again.");
    }
    const match = await bcrypt.compare(password, user.password);
    if(!match){
        throw new Error("Sorry the credentials you entered do not match. Please try again.");
    }
    return user;
}

const User = mongoose.model("User", UserSchema);

module.exports = User