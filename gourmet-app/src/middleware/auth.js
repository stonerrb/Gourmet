const jwt = require("jsonwebtoken");
const profile = require("../models/profile");

const isauth = async (req,next,res) => {
    if(req.headers &&  req.headers.authorisation){
        try{
            const token = req.headers.authorisation.split('.')[1]
            const decode = jwt.verify(token,"gourmetsecret")
    
            const user = await profile.findbyID(decode.userID);
            if(!user) {
                return res.json({success:false,message:'Unauthorised Access!!'})
            }
            req.user = user
            next();
        }
        catch(e){
            if(e.name === 'JsonTokenError'){
                return res.json({success:false,message:'Unauthorised Access!!'})
            }
            if(e.name === 'JsonExpiredError'){
                return res.json({success:false,message:'Session Expired Try Signing in!!'})
            }
            res.json({success:false,message:'Andruni Apda!!'})
        }
    }else{
        res.json({success:false,message:'Unauthorised Access!!'})
    }
}

module.exports = isauth
