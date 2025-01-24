const Blog = require('../models/Blogs')

// @desc Get All Blogs
// route GET api/v1/blogs
// access Public
exports.getBlogs = async (req, res, next) => {
    const blog = await Blog.find()

    res.status(200).json({
        success: true,
        length: blog.length,
        data: {
            blog
        }
    })
}

// @desc Get Single Blog
// route GET api/v1/blogs/:id
// access Public
exports.getBlog = async (req, res, next) => {
    const blog = await Blog.findById(req.params.id)

    res.status(200).json({
        success: true,
        data: {
            blog
        }
    })
}

// @desc Create New Blogs
// route POST api/v1/blogs
// access Private
exports.createBlog = async (req, res, next) => {
    try {
        // let's save into DB
        const blog = await Blog.create(req.body)
    
        res.status(201).json({
            success: true,
            data: {
                blog
            }
        })
    } catch (err) {
        res.status(400).json({
            success: false,
            message: 'there is an error found!'
        })
    }
    
}

// @desc Update Blogs
// route PUT api/v1/blogs/:id
// access Private
exports.updateBlog = async (req, res, next) => {
    const blog = await Body.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    })

    if(!blog) {
        return res.status(404).json({
            success: false,
            message: 'there is no blogs found, in order to update'
        })
    }

    res.status(200).json({
        success: true,
        data: {
            blog
        }
    })
}

// @desc Delete Blogs
// route DELETE api/v1/blogs/:id
// access Private
exports.deleteBlog = async (req, res, next) => {
    await Blog.findByIdAndDelete(req.params.id)

    res.status(204).json({
        success: true,
    })
}