// test_mongo.js

const { MongoClient } = require("mongodb");

// ✅ Your MongoDB Atlas URL
const uri = "mongodb+srv://riteshcode12:project@cluster0.0y3ve.mongodb.net/?appName=Cluster0";

// ✅ Database + Collection names
const dbName = "scifusion";
const collectionName = "connection_test";

async function run() {
    const client = new MongoClient(uri);

    try {
        console.log("Connecting to MongoDB...");
        await client.connect();
        console.log("✅ Connected to MongoDB Atlas!");

        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        // ✅ Insert a test document
        const testDoc = {
            message: "Hello SciFusion!",
            timestamp: new Date()
        };

        const insertResult = await collection.insertOne(testDoc);
        console.log("✅ Inserted Document ID:", insertResult.insertedId);

        // ✅ Query back the document
        const findResult = await collection.find({}).toArray();
        console.log("✅ Documents in collection:");
        console.log(findResult);

    } catch (err) {
        console.error("❌ Error:", err);
    } finally {
        await client.close();
        console.log("✅ Connection closed.");
    }
}

run();
