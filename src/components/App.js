import React from 'react';
import Users from './Users/Users';
import CreateUser from './ManageUsers/CreateUser';

const App = () => {
    return (
      <div className="container">
        <CreateUser />
        <Users />
      </div>
    );
}

export default App;
