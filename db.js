require('dotenv').config()
const { MongoClient, ObjectId } = require("mongodb")
const client = new MongoClient(process.env.DB_CONN);
const database = client.db(process.env.DB_DB);
const collTopic = database.collection(process.env.DB_COLLECTION);
const collPic = database.collection(process.env.DB_COLLPIC);

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


async function insertPicture(pic) {
  try {
    // Connect the client to the server
    await client.connect()
    const result = await collPic.insertOne(pic)
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
currentPage = 0;
async function listTopic(filtr,page){
  
  if (page > 0) currentPage +=2;
  console.log(currentPage)
  try {
      await client.connect()
      if (filtr!=null) {
        console.log("7")
        return collTopic.find({topic: RegExp(filtr)}).sort({_id:1}).skip(0).limit(1).toArray()

      } else {
        console.log("8")
        console.log(currentPage)
        return collTopic.find().sort({_id:1}).skip(0).limit(1).toArray()
      }    
      
  } catch (err) {
      throw new Error(err)
  }
}


async function getPictures(id){
  try {
      await client.connect()
      return collPic.find({topicId: id}).toArray()          
  } catch (err) {
      throw new Error(err)
  } 
}


async function deletePicture(id){
  try {
      await client.connect()
      const result = await collPic.deleteOne({"topicId": id});
      console.log(result)
  } catch (err) {
      throw new Error(err)
  }
}

module.exports = { 
  run,
  insertTopic,
  deleteTopic,
  listTopic,
  insertPicture,
  getPictures,
  deletePicture
}