const mongo = require('mongoose')

const goalSchema = mongo.Schema({
    user: {
        type: mongo.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    text:{
        type: String,
        required: [true, 'Please add a text']
    },
},
{
    timestamps: true,
}
)

module.exports = mongo.model('Goal', goalSchema)