import React, { useState, useEffect } from 'react';

function UsersList() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:3000/api/users')
            .then(response => response.json())
            .then(data => {
                setUsers(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching users:", error);
                setLoading(false);
            });
    }, []); 
    if (loading) return <div>Loading...</div>;

    return (
        <div>
            <h1>Users List</h1>
            <ul>
                {users.map(user => (
                    <li key={user._id}>
                        {user.name} ({user.age} years old) - {user.email}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UsersList;
