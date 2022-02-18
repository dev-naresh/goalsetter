const mongo = require('mongoose')

const connectDB = async() => {
    try{
        const conn = await mongo.connect(process.env.MONGO_URL)

        console.log(`DB connected: ${conn.connection.host}`.cyan.underline)
    } catch (e){
        console.log(e)
        process.exit(1)
    }
}

module.exports = connectDB