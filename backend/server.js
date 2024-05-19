const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://hh:hawkHacks24@cluster1.tajctak.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1`;

//const uri = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster1.tajctak.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const express = require('express')
const app = express()
const cors = require('cors');
app.use(cors());
const port = 4000

async function run() {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();
      // Access the accounts database and the accounts collection
      const db = client.db("accounts");
      const accountCollection = db.collection("account");

      // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  run().catch(console.dir);

app.get('/api/users/:email', async(req,res) =>{
    console.log('called')
    const userEmail = req.params.email;
    const account = await accountCollection.findOne({email: `${userEmail}`});
    res.send('Hello World!')
})

app.get('/api/test', async(req,res) =>{
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})