
### Mini-Project 4

**Description:**  
This iteration introduces improvements to our Express server focusing on asynchronous operations.

**Key Changes:**  
- Asynchronous handling for fetching and adding fruits.
- Improved error handling in routes.


### Mini-Project 3

**Description:**  
Introducing the third iteration, now powered by Express.js with EJS templating for dynamic content rendering.

**Key Features:**  
- Express server setup with CRUD routes for a Fruits collection.
- EJS Templates for fruit operations.

**How to Run:**  
1. Install Node.js.
2. Navigate to the project directory and run: `npm install`.
3. Start the server: `node index.js`.
4. Access via: `http://localhost:3000/`.




## Mini-Project Series


 main
### Mini-Project2

**Description:**  
This mini-project focuses on building a basic HTTP server using Node.js and performing file operations such as reading, writing, and deleting files using the `fs` module in Node.js.

**Key Changes:**  
- Created a basic HTTP server using the `http` module that listens on port 3000.
- Implemented a simple route `/api/users` which reads user data from a `users.json` file.
- Error handling improvements.
  


### Mini-Project 3

**Description:**  
Introducing the third iteration, now powered by Express.js with EJS templating for dynamic content rendering.

**Key Features:**  
- Express server setup with CRUD routes for a Fruits collection.
- EJS Templates for fruit operations.

**How to Run:**  
1. Install Node.js.
2. Navigate to the project directory and run: `npm install`.
3. Start the server: `node index.js`.
4. Access via: `http://localhost:3000/`.

### Mini-Project 4

**Description:**  
This iteration introduces improvements to our Express server focusing on asynchronous operations.

**Key Changes:**  
- Asynchronous handling for fetching and adding fruits.
- Improved error handling in routes.

**How to Run:**  
1. Install Node.js.
2. Navigate to the project directory and run: `npm install`.
3. Start the server: `node index.js`.
4. Access via: `http://localhost:3000/`.

### Mini-Project 5

**Description:**  
This iteration delves into the world of React, integrating with the backend from Mini-Project 4.

**Key Features & Implementations:**  
- Cloned the existing repository from Mini-Project 4.
- Initialized a new React app.
- Showcased JSX syntax, different component types, props & state, event handling, conditional rendering, lists & keys, and API integration.
- Version control through GitHub.

**How to Run:**  
1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies using: `npm install`.
4. Start the React app: `npm start`.
5. Access via: `http://localhost:3000/`.

### Mini-Project 6: React Exercise Manager

**Description:**  
A web application for managing exercise routines utilizing the `useState` and `useEffect` hooks.

**Features:**  
- Add, edit, or delete exercises.
- Data persistence in local storage.

**Prerequisites:**  
- Node.js
- npm

---
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



**How to Run:**  
1. Install Node.js.
2. Navigate to the project directory and run: `npm install`.
3. Start the server: `node index.js`.
4. Access via: `http://localhost:3000/`.
