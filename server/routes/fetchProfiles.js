import express from 'express';
import {db} from '../db.js';

const router = express.Router();

router.get("/buyer/services/category",async (req,res)=>{
    const key = req.query.key;
    try{
        
    }catch(err){
        res.status(400).json({error : "Error fetching sellers profiles check fecthProfiles file"});
    }
})

export default router;