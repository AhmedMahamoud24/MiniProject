import React, { useState } from 'react';
import axios from 'axios';

function AddUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { 
      name, 
      email, 
      age: parseInt(age, 10) 
    };
  
    axios.post('http://localhost:3000/api/users', newUser, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        console.log("User added:", response.data);
    })
    .catch(error => {
        console.error("Error adding user:", error);
    });
  };
  

  return (
    <div>
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
        <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
        <input value={age} onChange={e => setAge(e.target.value)} placeholder="Age" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddUser;
