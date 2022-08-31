const mongoose = require('mongoose')
const ObjectID = mongoose.Schema.Types.ObjectId

const carSchema = new mongoose.Schema({
    owner : {
        type: ObjectID,
        required: true,
        ref:'User',
    },
    category : {
        type: ObjectID,
        required: true,
        ref: 'category',
    },
    model: {
        type: Number,
        required: true,
        default: 0
    },
    colour: {
        type:String,
        required: true
    },
    reg_no: {
        type:String,
        required: true
    }
}, {
    timestamps: true
})

const Car = mongoose.model('Car', carSchema)

module.exports = Car