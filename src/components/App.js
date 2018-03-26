import React, { Component } from 'react';
import {
  HashRouter,
  Route,
  NavLink
} from 'react-router-dom';
import Users from './Users';
import CreateUser from './CreateUser';
import EditUser from './EditUser';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="container">
        <ul className="nav">
          <li className="nav-item">
            <NavLink className="nav-link active" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/newuser">Create User</NavLink>
          </li>
        </ul>
          <div className="content">
            <Route exact path="/" component={Users}/>
            <Route path="/newuser" component={CreateUser}/>
            <Route path="/users/:id" component={EditUser}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
