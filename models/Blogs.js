const mongoose = require('mongoose')
const slugify = require('slugify')

const BlogShema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Blog must have title'],
        trim: true,
        unique: true,
        maxlength: [25, 'tile maximum length should be 25']
    },
    content: {
        type: String,
        required: [true, 'Blog must have content']
    },
    category: {
        type: String,
        required: [true, 'Blog must have category'],
        enum: {
            values: ['technology', 'cloud', 'ai'],
            message: 'You must select category'
        }
    },
    tags: {
        type: String,
        enum: {
            values: ['tech', 'programming', 'analytics']
        }
    },
    slug: String,
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Blogs', BlogShema)