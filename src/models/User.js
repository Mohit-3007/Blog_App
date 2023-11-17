const mongoose = require('mongoose');

const userScehema = mongoose.Schema({
    sUsername: {
        type: String,
        unique: [true, "username should be unique"],
        require: [true, "username is require field"]
    },
    sEmail: {
        type: String,
        unique: [true, "email should be unique"],
        require: [true, "email is require field"]
    },
    sPassword: {
        type: String,
        require: [true, "password is require field"],
        minLength: [8, "password should be atleast of length 8"],
        maxLength: [30, "password should be not be more than length of 30"],
    },
    oName: {
        sFirstname: String,
        sLastname: String,
    },
    aBlogs: [
        {
            iBlogId: {
                type: mongoose.Schema.ObjectId,
                ref: 'blogs',
                require: [true, "BlogId ois a required field"]
            }
        }
    ],
    sProfilePicUrl: {
        type: String,
        default: ""
    },
    bIsUserVerified: {
        type: Boolean,
        default: false
    },
    bIsEmailVerified: {
        type: Boolean,
        default: false
    },
    sResetPasswordToken: String,
    sResetPasswordTokenExpires: String,
    sVerifyEmailToken: String,
    sVerifyEmailTokenExpires: String

    
})

module.exports = mongoose.model('User', userScehema);