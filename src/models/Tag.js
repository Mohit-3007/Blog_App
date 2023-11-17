const mongoose = require('mongoose');

const tagSchema = mongoose.Schema({
    sCategoryName: {
        type: String,
        unique: [true, "category name should be unique"],
        require: [true, "category name is require field"]
    },
    aBlogs: [
        {
            iBlog: {
                type: mongoose.Schema.ObjectId,
                ref: "blogs"
            }
        }
    ]
})

module.exports = mongoose.model('tag', tagSchema);