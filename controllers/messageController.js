const User = require('../models/User');
const Message = require('../models/message');
const validation = require('../validation');
//
exports.create = [validation.message, validation.title, (req,res,next) => {
    if(! req.errors.isEmpty()){
        res.send(req.errors.array()[0])
    } else {
        const message = new Message({
            user: req.user.user._id,
            timestamp: new Date(),
            title: req.body.title,
            body: req.body.message
        }).save(err => {
            if (err) {res.json(err)}
            //On succesful save to db, send the message back to the user
            res.json({
                title: req.body.title,
                message: req.body.message
            })
        })
    }
}]

exports.index = (req,res,next) => {
    Message.find({}, (err, messages) => {
        if(err) {res.json(err);}
        res.json(messages)
    })
}

exports.show = (req,res,next) => {
    Message.findById(req.params.id, (err, message) => {
        if(err) {res.json({message: error})}
        if(!message) {res.status(404).json({message: 'post not found'})}
        res.json(message);
    })
}

exports.delete = (req,res,next) => {
    Message.findByIdAndDelete(req.params.id, (err, message) => {
        if (err) {res.json({message: 'error deleting post'})}
        if (! message){res.status(404).json({message: 'post not found'})}
        res.json({message: 'delete successful'})
    })
}