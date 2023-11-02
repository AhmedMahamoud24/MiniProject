# Mini-Project2 

This mini-project is focused on building a basic HTTP server using Node.js and performing file operations such as reading, writing, and deleting files using the fs module in Node.js.

# Changes

1. server.js
Created a basic HTTP server using the http module.
The server listens on port 3000.
Implemented a simple route /api/users which reads user data from a file (users.json).
Added error handling: If the user data file cannot be read, a 500 Internal Server Error is returned. If the route is not recognized, a 404 Not Found error is returned.

2. FileOperations.js
Used the fs module for file operations.
Implemented the following file operations:
Write: Writes the text Hello World! to a file named example.txt.
Read: Reads content from example.txt and logs it to the console.
Delete: Deletes the example.txt file.



#Mini-Project 3 

Introducing the third iteration of our mini-projects, now powered by Express.js. We've built upon our server.js & fileOperations.js foundations and integrated CRUD operations for a collection of fruits. This iteration also sees the introduction of EJS templating for dynamic content rendering.

#Features:
index.js:

Express server setup on port 3000.
Middleware configurations for body-parsing and request logging.
CRUD routes for the Fruits collection.
EJS Templates:

FruitForm.ejs: A form to add new fruits.
Fruits.ejs: Displays the list of fruits.
updateFruitForm.ejs: A form to update existing fruits.


# MiniProject

#Functionality

This code program does the following

Read file
write file
Delete File

# Also shows errors

# Miniproject-6 

# React Exercise Manager

A simple React application that allows you to manage exercise routines using the `useState` and `useEffect` hooks.


## Project Description

The React Exercise Manager is a basic web application that allows users to:

- Add new exercises to their routine.
- Edit the names of existing exercises.
- Delete exercises from their routine.
- Persist exercise data in local storage.

The application utilizes the `useState` and `useEffect` hooks for state management and side effects, providing a simple yet effective way to maintain exercise data.

## Features

- **Add Exercise**: Enter the name of a new exercise and click the "Add Exercise" button to add it to your routine.

- **Edit Exercise**: Click the "Edit" button next to an exercise to modify its name. Confirm the edit by clicking the "Confirm Edit" button.

- **Delete Exercise**: Remove exercises from your routine by clicking the "Delete" button.

- **Local Storage**: Your exercise data is automatically saved to local storage, ensuring that your exercise routines persist even after you close or refresh the app.

## Getting Started

### Prerequisites

Before running the application, ensure that you have the following installed:
- Node.js
- npm

