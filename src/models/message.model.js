const mongoose = require('mongoose');
const messageSchema=mongoose.Schema({
    userID : {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true

    }
});
const Message = mongoose.model('Message', userSchema);
module.exports = Message;