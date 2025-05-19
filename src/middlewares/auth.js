const auth = (req,res,next)=>{
    const token = "xyz";
    const isAuthorised = token === "xyz";
    if(!isAuthorised){
        res.status(401).send("Not Authorised");
    }
    else{
        next();
    }
}

const userAuth = (req,res,next)=>{
    const token = "xyz";
    const isAuthorised = token === "xyz";
    if(!isAuthorised){
        res.status(401).send("Not Authorised");
    }
    else{
        next();
    }
}

module.exports ={
    auth,userAuth,
}