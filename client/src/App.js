// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import AddHouse from './pages/AddHouse';
import ListHouses from './pages/ListHouses';
import AddProject from './pages/AddProject';
import ListProjects from './pages/ListProjects';
import UploadPhoto from './pages/UploadPhoto';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/add-house" component={AddHouse} />
        <Route path="/list-houses" component={ListHouses} />
        <Route path="/add-project" component={AddProject} />
        <Route path="/list-projects" component={ListProjects} />
        <Route path="/upload-photo" component={UploadPhoto} />
      </Switch>
    </Router>
  );
};

export default App;
