const authController = require('../controllers/authController')
const userRepository = require('../repositories/userRepository')

exports.authenticate = (req,res,next)=>{
    const token = req.headers['Toker']

    if(!token){
        return res.status(401).json({
            success:false,
            error: "you dont have access to this endpoint"
        })
    }

    const userID = authController.tokens.get(token);
    if (!userID){
         return res.status(401).json({
             success: false,
             error: "you dont have access to this endpoint",
         });
    }

    const user =  userRepository.getUserById(userID);
    req.user = user

    next()
}