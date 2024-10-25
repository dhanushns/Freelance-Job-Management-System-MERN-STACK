import { MongoClient } from "mongodb";
import dotenv from 'dotenv';

dotenv.config();

const uri = "mongodb://localhost:27017/JobSync";

let db,client;

async function connectToDB(){
    if(!client){
        client = new MongoClient(uri);
        try{
            await client.connect();
            db = client.db("jobsync_db");
            console.log("Connected to MongoDB!");
        }
        catch(err){
            console.log("MongoDB connection error : ",err);
            throw err;
        }
    }
    return client;
}

export {db,connectToDB};