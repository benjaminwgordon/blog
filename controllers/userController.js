const jwt = require('jsonwebtoken');
const User = require('../models/User');
const bcrypt = require('bcryptjs');

exports.login = (req,res) => {  
    User.findOne({username:req.body.username}, (err,user) => {
        if (err){
            res.json({error:'err in db findone'})
        }

        //username not in db
        if (! user) {
            res.status(404).json({error:'user not found'})
        }
        
        //check password is correct
        bcrypt.compare(req.body.password, user.password, (err, result) => {
            if (err){res.status(404).json({message:'error in password hash', err})}
            if(! result){res.status(403).json({message:'incorrect password'})}
            
            const token = jwt.sign({user}, process.env.secret, {
                algorithm: "HS256",
                expiresIn: 600
            })
            res.cookie("token", token, {maxAge:300 * 1000})
            res.header('authorization-token', token).send(token)
        })
    })
};


exports.welcome = (req,res)=>{
    if (req.user){
        res.send("welcome to the api " + req.user.user.username);
    }
    res.status(403).json({message:'log in to continue'})
};
