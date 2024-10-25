import jwt from 'jsonwebtoken';

const authenticateToken = (req,res,next) =>{
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if(!token){
        return res.status(401).json({ message: 'Access denied. Token missing!' });
    }

    try{
        const decode = jwt.verify(token,'jobsync@9150');
        req.user = decode;
        next();
    }catch(err){
        console.log(err)
        return res.status(403).json({ message: 'Invalid token' });
    }

}

export default authenticateToken;