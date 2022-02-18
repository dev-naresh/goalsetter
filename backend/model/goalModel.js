const mongo = require('mongoose')

const goalSchema = mongo.Schema({
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