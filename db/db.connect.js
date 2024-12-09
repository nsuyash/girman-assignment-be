const mongoose = require('mongoose');
require('dotenv').config();

const MONGODB_URL = process.env.MONGODB_URL
const initializeConnection = async () => {
    try {
        const connected = await mongoose.connect(MONGODB_URL)

        if(connected){
            console.log("Connected Successfully.")
        }
    } catch (error){
        console.log("Connection failed.")
    }
}

module.exports = { initializeConnection } 