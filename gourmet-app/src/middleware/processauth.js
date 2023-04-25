const processToken = async (req,next,res) => {
    try{
        const token = req.body.token.split(".")[1]; //took the token and got the payload

        const payload = JSON.parse(Buffer.from(token, "base64").toString("utf8")); //converted the payload to json
    
        const profile_id = payload._id; //got the user id from the payload

        req.body.profile_id = profile_id;

        next();

    }catch(e){
        if(e.name === 'JsonTokenError'){
            return res.json({success:false,message:'Unauthorised Access!!'})
        }
        if(e.name === 'JsonExpiredError'){
            return res.json({success:false,message:'Session Expired Try Signing in!!'})
        }
        res.json({success:false,message:'Andruni Apda!!'})
    }
}

module.exports = processToken