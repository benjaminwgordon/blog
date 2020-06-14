const {check, validationResult} = require ('express-validator');

//All validators attach their error to req.errors in the middleware chain


//Validator for post message body
exports.message = [
    check('message').trim().isLength({min:1}).withMessage('Cannot submit empty message').escape(),
    (req,res,next)=>{
        req.errors = validationResult(req);
        next();
    }
];


exports.username = [
    check('username').trim().isLength({min:1}).withMessage('username field is required').isAlphanumeric().withMessage("Enter an alphanumeric username").escape(),
    (req,res,next)=>{
        req.errors = validationResult(req);
        next();
    }
];

exports.password = [
    check('password').trim().isLength({min:1}).withMessage('password field is required').escape(),
    (req,res,next)=>{
        req.errors = validationResult(req);
        next();
    }
];

exports.title = [
    check('title').trim().isLength({min:1}).withMessage('password field is required').escape(),
    (req,res,next)=>{
        req.errors = validationResult(req);
        next();
    }
]