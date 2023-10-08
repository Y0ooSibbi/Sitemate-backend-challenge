const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { MongoClient, ObjectId } = require('mongodb');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const uri = 'mongodb+srv://yorsibbu:alpesh12345@cluster0.wrycp28.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}
run();

app.get('/issues/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const db = client.db();
    const collection = db.collection('issues');
  
    try {
      const issue = await collection.findOne({ id });
      if (issue) {
        res.json(issue);
      } else {
        res.status(404).json({ message: 'Issue not found' });
      }
    } catch (error) {
      console.error('Error fetching issue:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  


  app.post('/issues', async (req, res) => {
    const newIssue = req.body;
    newIssue.id = new Date().getTime(); // Generate a new unique ID (you can use other methods too)
    console.log(newIssue);
    const db = client.db();
    const collection = db.collection('issues'); // Replace 'issues' with your collection name
  
    try {
      const result = await collection.insertOne(newIssue);
    //   const insertedIssue = result.ops[0];
    //   res.status(201).json(insertedIssue);
    res.status(200).json("inserted Succesfully")
    } catch (error) {
      console.error('Error creating issue:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  

app.put('/issues/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const updatedIssue = req.body;
    const db = client.db();
    const collection = db.collection('issues'); // Replace 'issues' with your collection name
  
    try {
      const result = await collection.updateOne({ id }, { $set: updatedIssue });
      if (result.modifiedCount === 1) {
        res.json(updatedIssue);
      } else {
        res.status(404).json({ message: 'Issue not found' });
      }
    } catch (error) {
      console.error('Error updating issue:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  

  app.delete('/issues/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const db = client.db();
    const collection = db.collection('issues'); // Replace 'issues' with your collection name
  
    try {
      const result = await collection.deleteOne({ id });
      if (result.deletedCount === 1) {
        res.json({ message: 'Issue deleted' });
      } else {
        res.status(404).json({ message: 'Issue not found' });
      }
    } catch (error) {
      console.error('Error deleting issue:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
