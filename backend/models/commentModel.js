import mongoose from "mongoose";

const commentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
})

const Comment = mongoose.model('Comment', commentSchema)

export default Comment