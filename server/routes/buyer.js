import express from 'express'
import {db} from '../db.js';
import { ObjectId } from 'mongodb';
import authenticateToken from '../authMiddleware.js';

const router = express.Router();
let id;

router.get("/buyer/profile", async (req,res)=>{
    id = req.query.email;
    const user = await db.collection("users").findOne({email : id});
    res.send(user.firstname);
})

router.post("/buyer/create_job", async (req,res)=>{
    const email = req.query.email;
    const {title,description,domain,category,pay_per_hr,expected_duration,deadline,skills} = req.body;
    try{
        const user = await db.collection("users").findOne({email:email});
        const job = await db.collection("jobs");
        const post_job = {
            buyer_id : email,
            title,
            description,
            domain,
            category,
            pay_per_hr,
            expected_duration,
            deadline,
            skills,
            proposals : '',
            createdAt : new Date()
        }
        console.log(post_job);
        await job.insertOne(post_job);
        console.log("Inserted");
        res.send(true);
    }catch(err){
        res.send(false);
    }
});

router.get("/buyer/getJobs",async (req,res)=>{
    const email = req.query.email;
    const jobs = await db.collection("jobs").find({buyer_id:email}).toArray();
    res.json(jobs);
})

router.post("/buyer/hire", async (req, res) => {
    const { job_id, seller_id } = req.query;

    if (!ObjectId.isValid(job_id) || !ObjectId.isValid(seller_id)) {
        console.log("Not Valid");
        return res.status(400).send({ success: false, message: 'Invalid job_id or seller_id' });
    }

    try {
        const jobsCollection = db.collection("jobs");
        await jobsCollection.updateOne(
            { _id: new ObjectId(job_id), "proposals.seller_id": seller_id },
            { $set: { "proposals.$.status": "hired" } }
        );
        const sellersCollection = db.collection("sellers");
        await sellersCollection.updateOne(
            { _id: new ObjectId(seller_id) },
            {
                $addToSet: {
                    currentProjects: { job_id: new ObjectId(job_id), status: 'in-progress' },
                    jobHistory: { job_id: new ObjectId(job_id), status: 'hired' }
                }
            }
        );
        res.send({ success: true });
    } catch (error) {
        console.error(error);
        res.status(500).send({ success: false, message: 'Internal Server Error' });
    }
});


router.get("/buyer/user-data" , authenticateToken, async (req,res)=>{
    try{
        const userId = new ObjectId(req.user.userId);
        const user = await db.collection("users").findOne({_id: userId});
        if(!user){
            return res.status(404).json({ message: 'User not found' });
        }

        res.json({success : true,data:user});
    }
    catch(err){
        console.log(err);
        res.status(500).json({ message: 'Server error' });
    }
})


export default router;
