# Sitemate Backend Challenge

This repository contains my solution to the Sitemate Backend Challenge. It's a simple REST API server and client for managing issues.

## Technology Stack

- Node.js for the server.
- Express.js for building RESTful APIs.
- MongoDB Atlas for data storage.
- HTML and JavaScript for the client.

## Features

1. **Create Issue**: Allows you to create a new issue with a unique ID.

2. **Read Issue**: Retrieves issue details by ID.

3. **Update Issue**: Updates an issue's description by ID.

4. **Delete Issue**: Deletes an issue by ID.

## Getting Started

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/sitemate-backend-challenge.git
```
2. Install the required packages:
```cd sitemate-backend-challenge
npm install```

3. Configure MongoDB Atlas:

Create a MongoDB Atlas account if you don't have one.
Replace the MongoDB connection string in server.js with your own.

4. Start the server:

```node server.js
```
5. Open client.html in your browser to interact with the API.

# Usage
Create Issue: Enter issue title and description, then click "Create Issue."
Read Issue: Enter the issue ID, then click "Read Issue."
Update Issue: Enter the issue ID and updated description, then click "Update Issue."
Delete Issue: Enter the issue ID, then click "Delete Issue."
Improvements
# Here are some potential improvements:

Implement input validation and error handling.
Add pagination for large issue datasets.
Create a user-friendly frontend using a frontend framework like React.
