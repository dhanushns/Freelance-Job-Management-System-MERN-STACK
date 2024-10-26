import express from 'express';
import bcrypt from 'bcrypt';
import {db} from '../db.js';

const router = express.Router();

router.post("/signup",async (req,res)=>{
    const {firstname,lastname,username,email,password,role} = await req.body;
    if(!firstname || !lastname || !username || !email || !password || !password){
        res.status(400).json({error : "All fields are requires"});
    }
    try{
        const users = db.collection("users");
        const existingUser = await users.findOne({username});
        if(existingUser){
            return res.status(400).json({error : "Username Already exists"});
        }

        const hashPassword = await bcrypt.hash(password,10);
        const newUser = {
            firstname,
            lastname,
            username,
            email,
            hashPassword,
            role,
            createdAt : new Date()
        };
        await users.insertOne(newUser);
        req.session.email = email;
        console.log(req.session);
        if(role === "seller"){
            res.json({success : true,redirect:"/onboard_seller"})
        }
        else{
            res.json({success : true,redirect:"/buyer"})
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({error : "Server Error check signup file",err});
    }
})

export default router;