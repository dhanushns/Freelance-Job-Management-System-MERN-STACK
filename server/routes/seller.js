import express from 'express'
import {db} from '../db.js';
import { ObjectId } from 'mongodb';
import authenticateToken from '../authMiddleware.js';

const router = express.Router();
let id;

router.get("/seller/profile", async (req,res)=>{
    id = req.query.email;
    const user = await db.collection("users").findOne({email : id});
    const dashboardData = {
        name:user.firstname,
        jobHistory : user.jobHistory,
        current_projects : user.current_projects
    }
    res.json(dashboardData);
})

router.get("/seller/get-job-post",authenticateToken, async (req,res)=>{
    const sellerId = new ObjectId(req.user.userId);
    if(!sellerId){
        res.redirect("/login");
    }
    const jobs = await db.collection("jobs").find({}).toArray();
    res.json(jobs);
})

router.post("/seller/apply-job", authenticateToken, async (req, res) => {
    const jobId = new ObjectId(req.query.job_id);
    const userId = new ObjectId(req.user.userId);

    try {
        const jobsCollection = db.collection("jobs");
        const usersCollection = db.collection("users");
        const sellersCollection = db.collection("sellers");

        const user = await usersCollection.findOne({ _id: userId });
        if (!user) {
            return res.status(404).send("User not found");
        }

        const newProposal = {
            seller_id: userId,
            name : user.firstname,
            submittedAt: new Date()
        };

        const result = await jobsCollection.updateOne(
            { _id: jobId },
            {
                $push: { proposals: newProposal },
                $set: { status: "proposed" }
            }
        );

        const project = {
            job_id : jobId,
            status : "pending",
        }

        await sellersCollection.updateOne(
            {user_id:userId},
            {
                $push : {proposals : project}
            }
        )

        if (result.matchedCount === 0) {
            return res.status(404).send("Job not found");
        }

        if (result.modifiedCount > 0) {
            console.log("Proposal successfully added.");
            return res.status(200).send(true);
        } else {
            console.log("Not updated");
            return res.status(304).send(false);
        }

    } catch (err) {
        console.error("Error updating job proposals:", err);
        return res.status(500).send("Internal server error");
    }
});


router.get("/seller/get-projects", authenticateToken , async (req,res)=>{

    const userId = new ObjectId(req.user.userId);
    
    try{
        const sellersCollection = db.collection("jobs");
        const projects = await sellersCollection.find({hired_person_id:userId}).toArray();
        res.json(projects);
    }catch(err){
        return res.status(500).send("Internal server error");
    }

});

router.get("/seller/get-proposals", authenticateToken , async (req,res)=>{

    const userId = new ObjectId(req.user.userId);
    
    try{
        const sellersCollection = db.collection("sellers");
        const data = await sellersCollection.findOne({user_id:userId},{proposals:1})
        res.json(data.proposals);
    }catch(err){
        return res.status(500).send("Internal server error");
    }

});

router.get("/seller/job", authenticateToken , async (req,res)=>{
    const jobId = new ObjectId(req.query.job_id);
   
    try{
        const job = await db.collection("jobs").findOne({_id:jobId});
        res.json(job);
    }catch(err){
        return res.status(500).send("Internal server error");
    }

});

router.get("/seller/dashboard",authenticateToken, async (req,res)=>{
    const userId = new ObjectId(req.user.userId);
   
    try{
        const job = await db.collection("sellers").findOne({user_id:userId});
        res.json(job);
    }catch(err){
        return res.status(500).send("Internal server error");
    }
})

router.post("/seller/update-job", authenticateToken , async (req,res)=>{
    const userId = new ObjectId(req.user.userId);
    const {id,status} = req.body;
    try{
        const jobId = new ObjectId(id);
        const jobs = await db.collection("jobs");
        await jobs.updateOne(
            {_id:jobId},
            {$set : {status}}
        );

        const sellers = db.collection('sellers');
        await sellers.updateOne(
            {
                user_id : userId,
                "jobs.job_id" : jobId

            },
            {
                $set : {
                    "jobs.$.status" : status
                }
            }
        );

        await sellers.updateOne(
            {
                user_id : userId,
                "proposals.job_id" : jobId
            },
            {
                $set : {
                    "proposals.$.status" : status
                }
            }
        );

        res.json({success : true});

    }catch(err){
        return res.status(500).send("Internal server error");
    }

})

export default router;