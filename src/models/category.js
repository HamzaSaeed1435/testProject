const mongoose = require('mongoose')
const ObjectID = mongoose.Schema.Types.ObjectId

const categorySchema = new mongoose.Schema({
    categoryName: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
})

const category = mongoose.model('category', categorySchema)

module.exports = category