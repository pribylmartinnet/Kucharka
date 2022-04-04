require('dotenv').config()
const { MongoClient, ObjectId } = require("mongodb")
const client = new MongoClient(process.env.DB_CONN);
const database = client.db(process.env.DB_DB);
const collTopic = database.collection(process.env.DB_COLLECTION);

async function run() {
 
  try {
      // Connect the client to the server
      await client.connect();
      // Establish and verify connection
      await client.db("admin").command({ ping: 1 });
      console.log("Connected successfully to server");
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
    
}

async function insertTopic(topic) {
  try {
    // Connect the client to the server
    await client.connect();
    
    const doc = {
      topic: topic.topic,
      descripttion: topic.description,
    }
    
    const result = await collTopic.insertOne(topic);
    
    console.log("Connected successfully to server");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

async function deleteTopic(id){
  try {
      await client.connect()
      const result = await collTopic.deleteOne({"_id": new ObjectId(id)});
      console.log(result)
  } catch (err) {
      throw new Error(err)
  }
}

async function listTopic(){
  console.log("ListTopic")
  try {
      await client.connect()
      // const cursor = col.find();
      //await cursor.forEach(console.dir);

      return collTopic.find().toArray()
      
  } catch (err) {
      throw new Error(err)
  }
}

module.exports = { 
  run,
  insertTopic,
  deleteTopic,
  listTopic
}