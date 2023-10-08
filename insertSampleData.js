const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://yorsibbu:alpesh12345@cluster0.wrycp28.mongodb.net/?retryWrites=true&w=majority";


const sampleData = [
    { id: 1, title: 'Sample Issue 1', description: 'Description for Sample Issue 1' },
    { id: 2, title: 'Sample Issue 2', description: 'Description for Sample Issue 2' },
    { id: 3, title: 'Sample Issue 3', description: 'Description for Sample Issue 3' },
    { id: 4, title: 'Sample Issue 4', description: 'Description for Sample Issue 4' },
    { id: 5, title: 'Sample Issue 5', description: 'Description for Sample Issue 5' },
    { id: 6, title: 'Sample Issue 6', description: 'Description for Sample Issue 6' },
    { id: 7, title: 'Sample Issue 7', description: 'Description for Sample Issue 7' },
    { id: 8, title: 'Sample Issue 8', description: 'Description for Sample Issue 8' },
    { id: 9, title: 'Sample Issue 9', description: 'Description for Sample Issue 9' },
    { id: 10, title: 'Sample Issue 10', description: 'Description for Sample Issue 10' }
  ];
async function insertSampleData() {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    const db = client.db(); // Get the default database
    const collection = db.collection('issues'); // Replace 'issues' with your collection name

    const result = await collection.insertMany(sampleData);

    console.log(`Inserted ${result.insertedCount} documents into the collection`);
  } catch (error) {
    console.error('Error inserting sample data:', error);
  } finally {
    await client.close();
  }
}

// Call the function to insert sample data
insertSampleData();
