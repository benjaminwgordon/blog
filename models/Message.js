const Mongoose = require('mongoose');
var Schema = Mongoose.Schema;
const User = require('../models/User');

const MessageSchema = Schema({
    user: {type:Schema.Types.ObjectId, ref: 'User', required:true},
    timestamp: {type:Date, required:true},
    title: {type:String, required:true, min:1},
    body: {type:String, required:true, min:10}
})

module.exports = Mongoose.model('Message', MessageSchema);