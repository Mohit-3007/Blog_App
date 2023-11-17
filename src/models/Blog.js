const mongoose = require('mongoose');

const blogScehma = mongoose.Schema(
    {
        sTitle: {
            type: String,
            require: [true, "Title is a require field"],
            unique: [true, "title should be unique"]
        },
        sContent: {
            type: String,
            require: [true, "content is a require field"],
            minLength: [100, "content should be of atleast of length 100"],
            maxLength: [10000, "content should be no more than length 10000" ]
        },
        iUseriD: {
            type: mongoose.Schema.ObjectId,
            ref: "Users"
        },
        aVotes: [
            {
                type: {
                    type: String,
                    enum: ["upvote", "downvote"],
                    require: [true, "type in votes is a require field"]
                },
                iUserId: {
                    type: mongoose.Schema.ObjectId,
                    ref: "Users"
                }
            }
        ],
        aComments: [
            {
                iComment: {
                    type: mongoose.Schema.ObjectId,
                    ref: 'comments'
                }
            }
        ],
        // it ia an array of Objects
        aTag: [String]
        // it is an array of stings

    },
    {
        timeStamps: true
    }
)

module.exports = mongoose.model('Blog', blogScehma);