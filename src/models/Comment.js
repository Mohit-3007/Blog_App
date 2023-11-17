const mongoose = require('mongoose');

const commentSchema = mongoose.Schema(
    {
        iBlog: {
            type: mongoose.Schema.ObjectId,
            ref: 'Blogs',
            require: [true, "blog Id is a required field"]
        },
        iUser: {
            type: mongoose.Schema.ObjectId,
            ref: 'users',
            require: [true, "user id is a required field"]
        },
        sContent: {
            type: String,
            require: [true, "content is a required field in comments"],
            minLength: [1, "content should be of atleast one length"],
            maxLength: [500, "content should not be more than 500 length"]
        },
        nLikes: {
            type: Number,
            default: 0
        },
        bIsParentComment: {
            type: Boolean,
            default: true
        },
        iParentCommentId: {
            type: mongoose.Schema.ObjectId,
            ref: 'comments',
        },
        aChildComments: [
            {
                iChildComment: {
                    type: mongoose.Schema.ObjectId,
                    ref: 'comments'
                }
            }
        ]

    },{
        timeStamps: true
    }
)

module.exports = mongoose.model("", commentSchema);