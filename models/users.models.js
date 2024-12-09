const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    profile_url: {
        type: String
    },
    city:{
        type: String
    },
    contact_number: {
        type: String
    }
}, {timestamps: true})

const Users = mongoose.model('Users', userSchema);

module.exports = Users;