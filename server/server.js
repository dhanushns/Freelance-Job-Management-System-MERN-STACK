import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import authenticateToken from './authMiddleware.js';
import { ObjectId } from 'mongodb';

import { db, connectToDB } from './db.js';

//Routers
import signup from './routes/signup.js';
import login from './routes/login.js';
import mailer from './routes/mailer.js';
import onboard from './routes/onboard.js';
import buyer from './routes/buyer.js';
import seller from './routes/seller.js';


dotenv.config();

const server = express();
server.use(express.json());
server.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
server.use(express.urlencoded({ extended: true }));
server.use(cookieParser())

server.use(session({
    secret: "jobsync@9150",
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: 1000 * 60 * 10,
        httpOnly: true,
        secure: false,
        sameSite: 'lax',
    }
}));


async function startServer(){
    await connectToDB();

    server.listen(8000,()=>{
        console.log("Server listening on port 8000");
    })

    server.get('/', authenticateToken, async (req, res) => {
        try {
            const id = new ObjectId(req.user.userId);
            const data = await db.collection("users").findOne({_id:id});
            if (data.role === 'buyer') {
                return res.json({ success: true, redirectUrl: '/buyer/' });
            } else if (userRole === 'seller') {
                return res.json({ success: true, redirectUrl: '/seller/dashboard' });
            }else {
                return res.status(403).json({ success: false, message: 'Access denied' });
            }
        } catch (error) {
            console.error('Error in fetching user role:', error);
            res.status(500).json({ success: false, message: 'Server error' });
        }
    });


    server.use('/',signup);
    server.use('/',login);
    server.use('/',mailer);
    server.use('/',onboard);
    server.use('/',buyer);
    server.use('/',seller);
}

startServer();
