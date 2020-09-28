import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/home.component';
import CreateCourse from './components/create-course.component';
import Users from './components/users.component';
import { logo } from './logo.png'
import Landing from './components/landing'
import Register from './components/auth/Register';
import Login from "./components/auth/Login";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
    <Router>
     
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          {/* <a className="navbar-brand" href="https://nyxwolves.com">
            <img src="./logo.png" width="30" height="30" alt="nyxwolves.com"></img>
          </a> */}
          <Link to="/" className="navbar-brand">Home</Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
              <Link to="/create_course" className="navbar-brand">CreateCourse</Link>
              </li>
              <li className="nav-item">
              <Link to="/users" className="navbar-brand">Users</Link>
              </li>
            </ul>
          </div>
        </nav>

        <Route path="/" exact component={Landing} />
        <Route path="/Home" exact component={Home} />
        <Route path="/create_course" exact component={CreateCourse} />
        <Route path="/users" exact component={Users} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
  
    </Router>
    </Provider>
  );
}

export default App;
