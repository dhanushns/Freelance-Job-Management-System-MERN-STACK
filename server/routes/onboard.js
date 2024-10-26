import express from 'express'
import {db} from '../db.js';

const router = express.Router();

router.post("/onboard",async (req,res)=>{
    const {display_name,description,bio,languages,profile_img,domain,category,skills,personal_website} = req.body;
    if(!display_name || !description || !bio || !languages || !profile_img || !domain || !category || !skills || !personal_website){
        res.status(400).json({error : "All fields are requires"});
    }
    try{
        const sellers = await db.collection("sellers");
        const email = req.session.email;
        const user = await db.collection("users").findOne({ email: email });
        console.log(req.session);
        if (!user) {
            console.log("Error")
            return res.status(404).json({ error: "User not found",user});
        }
        const seller = {
            user_id:user._id,
            display_name,
            description,
            bio,
            languages,
            profile_img,
            domain,
            category,
            skills,
            personal_website,
            proposals : [],
            jobs:[],
            ratings:"0"
        };

        await sellers.insertOne(seller);
        console.log(seller);
        res.json({success:true,redirect:"/login"});
    }
    catch(err){
        console.log(err);
        res.status(500).json({error : "Server Error check signup file"});
    }
})

export default router;