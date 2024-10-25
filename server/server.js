import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import session from 'express-session';
import cookieParser from 'cookie-parser';

import { db, connectToDB } from './db.js';

//Routers
import signup from './routes/signup.js';
import login from './routes/login.js';
import fecthProfiles from './routes/fetchProfiles.js';
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

    server.get('/',(req,res)=>{
        res.send("JobSync");
    });

    server.use('/',signup);
    server.use('/',login);
    server.use('/',fecthProfiles);
    server.use('/',mailer);
    server.use('/',onboard);
    server.use('/',buyer);
    server.use('/',seller);
}

startServer();
