## Mini-Project7

### Introduction
This project is a simple User Management System built with Node.js, Express, Mongoose (for MongoDB interactions), and React.

### Backend Setup
**Requirements:**
- Node.js
- MongoDB

**Steps:**
1. Clone the repository.
2. Navigate to the project directory in the terminal.
3. Run `npm install` to install the required dependencies.
4. Make sure your MongoDB server is running.
5. Run `node server.js` to start the backend server. It will connect to MongoDB and start listening on port 3000.

**API Endpoints:**
- `GET /api/users` - Fetches all users from the database.
- `POST /api/users` - Adds a new user to the database. The body should contain name, email, and age.

### Frontend Setup
**Requirements:**
- Node.js

**Steps:**
1. Navigate to the frontend (React) directory in the terminal.
2. Run `npm install` to install the required dependencies.
3. Run `npm start` to start the React development server. It will open up the application in your default browser.

### Features
- **Users List**: Displays a list of all the users fetched from the backend.
  
- **Add User**: A form to add a new user. It captures:
  - Name
  - Email
  - Age
  Upon submitting, the data is sent to the backend to be saved in the MongoDB database.

### Database Setup
We use MongoDB as our database. Here are the steps to set it up with initial data:
1. Start your MongoDB shell.
2. Access the `Mini-project7` database by running: `use Mini-project7`.
3. Create a users collection: `db.createCollection("users")`.
4. Insert sample users 
db.users.insertOne({ name: "John Doe", email: "johndoe@example.com", age: 30 });
db.users.insertMany([
  { name: "Jane Smith", email: "jane@example.com", age: 28 },
  { name: "Bob Johnson", email: "bob@example.com", age: 35 }
]);
