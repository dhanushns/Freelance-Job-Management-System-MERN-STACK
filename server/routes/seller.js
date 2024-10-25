import express from 'express'
import {db} from '../db.js';
import { ObjectId } from 'mongodb';

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

router.get("/seller/getJobs",async (req,res)=>{
    const jobs = await db.collection("jobs").find({}).toArray();
    res.json(jobs);
})

router.get("/seller/applyJob", async (req, res) => {
    const email = req.query.email;
    const id = req.query.job_id;

    try {
        const jobsCollection = db.collection("jobs");
        const usersCollection = db.collection("users");

        const user = await usersCollection.findOne({ email: email });
        if (!user) {
            return res.status(404).send("User not found");
        }

        const jobId = new ObjectId(id);

        const newProposal = {
            seller_id: email,
            status:"pending",
            submittedAt: new Date()
        };

        const result = await jobsCollection.updateOne(
            { _id: jobId },
            { $push: { proposals: newProposal } }
        );

        if (result.matchedCount === 0) {
            return res.status(404).send("Job not found");
        }

        if (result.modifiedCount > 0) {
            console.log("Proposal successfully added.");
            return res.status(200).send(true);
        } else {
            return res.status(304).send(false);
        }

    } catch (err) {
        console.error("Error updating job proposals:", err);
        return res.status(500).send("Internal server error");
    }
});

export default router;