import React from 'react';
import UsersList from './path-to-userslist-component'; 
import AddUser from './AddUser';

function App() {
    return (
        <div className="App">
            
            <UsersList />
            <AddUser />
        </div>
    );
}

export default App;
