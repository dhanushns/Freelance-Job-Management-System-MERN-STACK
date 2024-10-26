import express from 'express'
import {db} from '../db.js';
import { ObjectId } from 'mongodb';
import authenticateToken from '../authMiddleware.js';

const router = express.Router();
let id;

router.post('/buyer/post-job', authenticateToken, async (req, res) => {
    const { title, description, domain, category, budget, project_deadline, post_deadline, skills } = req.body;
    const buyerId = req.user.userId;

    try {
        const result = await db.collection('jobs').insertOne({
            buyer_id: new ObjectId(buyerId),
            title,
            description,
            domain,
            category,
            budget,
            project_deadline,
            post_deadline,
            skills,
            proposals : [],
            status : 'pending',
            created_at: new Date()
        });

        if (result.insertedId) {
            res.status(201).json({ message: 'Job post created successfully', jobId: result.insertedId });
        } else {
            res.status(500).json({ message: 'Failed to create job post' });
        }
    } catch (error) {
        console.error('Error inserting job post:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

router.get("/buyer/get-job-post",authenticateToken,async (req,res)=>{
    const buyerId = new ObjectId(req.user.userId);
    const jobs = await db.collection("jobs").find({buyer_id:buyerId}).toArray();
    res.json(jobs);
})

router.post("/buyer/hire", authenticateToken, async (req, res) => {

    const buyerId = new ObjectId(req.user.userId);
    const jobId = new ObjectId(req.query.job_id);
    const sellerId = new ObjectId(req.query.seller_id);
    const buyerData = await db.collection("users").findOne({_id:buyerId});

    const jobs = db.collection("jobs");
    const sellers = db.collection("sellers");

    await jobs.updateMany(
        { _id: jobId },
        {
            $set: {
                status: "hired",
                hired_person_id: sellerId
            }
        }
    );

    const newJob = {
        job_id : jobId,
        buyer_id : buyerId,
        buyer_name : buyerData.firstname,
        status : 'hired',
        payment_status : 'pending'
    }

    await sellers.updateMany(
        { user_id: sellerId, "proposals.status": "pending" },
        {
            $set: {
                "proposals.$.status": "hired"
            },
            $push: {
                jobs: newJob
            }
        }
    );

    res.json({success : true});

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

router.get("/buyer/get-profiles", authenticateToken , async (req,res)=>{
    const data = await db.collection("sellers").find({}).toArray();
    res.json({success : true,data});
})

router.get("/buyer/profile-data", authenticateToken ,async (req,res)=>{
    const id = new ObjectId(req.query.id);
    const user = await db.collection("sellers").findOne({user_id:id});
    res.json({success : true,user});
})

export default router;
