const jwt = require('jsonwebtoken');


//Authenticates the JWT header
exports.authenticateJWT = (req,res,next) => {
    const authHeader = req.headers['authorization-token'];
    if(authHeader){
        const token = authHeader;
        jwt.verify(token, process.env.secret, (err,user) => {
            if (err){
                return res.send(err);
            }
            req.user = user;
            next();
        });
    } else{
        res.sendStatus(401);
    }
};