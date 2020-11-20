import React from 'react';
import './App.css';
import ImageSearchTask from './ImageSearchTask';
import Login from './Login';
import Nav from './Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path='/app' component={ImageSearchTask} />
          <Route exact path='/' component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;