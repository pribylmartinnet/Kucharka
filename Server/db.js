require("dotenv").config()
const {MongoClient } = require("mongodb")
const client = new MongoClient(process.env.DB_CONN)

async function run(){
    try{
        await client.connect();

        await client.db("soukupis").command({ping: 1})
        console.log("Connected")
    }catch{
        await client.close()
    }
}

module.exports.run = run

