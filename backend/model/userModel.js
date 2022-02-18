const mongo = require('mongoose')

const userSchema = mongo.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    
    email: {
        type: String,
        required: [true, 'Please add a email']
    },
    
    password: {
        type: String,
        required: [true, 'Please add a password']
    },
},
{
    timestanms: true,
})

module.exports = mongo.model('Users', userSchema)