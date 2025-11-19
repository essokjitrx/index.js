import { MongoClient } from "mongodb";

const MONGO_URI = process.env.MONGO_URL;
const client = new MongoClient(MONGO_URI);

async function connectDB() {
    try {
        await client.connect();
        console.log("✅ Connected to MongoDB!");
    } catch (err) {
        console.error("MongoDB connection error:", err);
    }
}

connectDB();
