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
    timestanms: true,
}
)

module.exports = mongo.model('Goals', goalSchema)