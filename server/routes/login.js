import express from 'express';
import { db } from '../db.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
        const user = await db.collection("users").findOne({ email });

        if (!user) {
            return res.status(400).json({ message: "Account does not exist" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.hashPassword);
        if (!isPasswordValid) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign(
            {
                userId: user._id,
                username: user.username,
                role: user.role
            },
            'jobsync@9150',
            { expiresIn: '12h' }
        );

        const responseData = {
            token,
            user: {
                userId: user._id,
                username: user.username,
                email: user.email,
                role: user.role
            }
        };

        if (user.role === 'buyer') {
            res.status(200).json({
                ...responseData,
                redirectUrl: "/buyer",
            });
        } else if (user.role === 'seller') {
            res.status(200).json({
                ...responseData,
                redirectUrl: "/seller/dashboard",
            });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Server Error. Please try again." });
    }
});

export default router;
