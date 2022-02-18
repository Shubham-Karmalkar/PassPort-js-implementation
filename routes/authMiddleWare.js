
module.exports.isAuth = (req,res,next) => {
    if(req.isAuthenticated()){
        next(); 
    }else{
        res.status(401).json({msg: 'you are not autherised to view'});
    }
}


module.exports.isAdmin = (req,res,next) => {
    if(req.isAuthenticated() && req.user.admin){
        next();
    }else{
        res.status(400).json({msg: 'you are not the admin '});
    }
}