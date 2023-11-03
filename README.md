# Mini-Project Series

A series of mini-projects ranging from basic Node.js HTTP servers to advanced React applications.

## Mini-Project2

**Description:**  
This mini-project focuses on building a basic HTTP server using Node.js and performing file operations such as reading, writing, and deleting files using the `fs` module in Node.js.

**Key Changes:**  
- Created a basic HTTP server using the `http` module that listens on port 3000.
- Implemented a simple route `/api/users` which reads user data from a `users.json` file.
- Error handling improvements.
  
## Mini-Project 3

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

## Mini-Project 4

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

## Mini-Project 5

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

## Mini-Project 6: React Exercise Manager

**Description:**  
A web application for managing exercise routines utilizing the `useState` and `useEffect` hooks.

**Features:**  
- Add, edit, or delete exercises.
- Data persistence in local storage.

**Prerequisites:**  
- Node.js
- npm

---




# Mini-Project7

- This project is a simple User Management System built with Node.js, Express, Mongoose (for MongoDB interactions), and React.

Backend Setup
Requirements:
Node.js
MongoDB
Steps:
Clone the repository.
Navigate to the project directory in the terminal.
Run npm install to install the required dependencies.
Make sure your MongoDB server is running.
Run node server.js to start the backend server. It will connect to MongoDB and start listening on port 3000.
API Endpoints:
GET /api/users - Fetches all users from the database.
POST /api/users - Adds a new user to the database. The body should contain name, email, and age.
Frontend Setup:
Requirements:
Node.js
Steps:
Navigate to the frontend (React) directory in the terminal.
Run npm install to install the required dependencies.
Run npm start to start the React development server. It will open up the application in your default browser.
Features:
Users List
Displays a list of all the users fetched from the backend.

Add User
A form to add a new user. It takes in the following details:

Name
Email
Age
Upon submitting, it sends the data to the backend to save it in the MongoDB database.

Database Setup:
We are using MongoDB as our database. The steps to set it up with some initial data:

Start your MongoDB shell.
Use the Mini-project7 database by running: use Mini-project7.
Create a users collection: db.createCollection("users").
Insert some sample users:
