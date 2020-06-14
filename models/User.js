const Mongoose = require('mongoose');

const Schema = Mongoose.Schema;

//User schema, only one authorized user exists, the primary author
const UserSchema = new Schema({
    fullName: {type:String, required:true},
    username: {type:String, required:true, max:100},
    password: {type:String, required:true}
})

module.exports = Mongoose.model('User', UserSchema);