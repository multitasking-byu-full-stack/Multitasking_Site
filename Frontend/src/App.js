import React from 'react';
import './App.css';
import ImageSearchTask from './ImageSearchTask';
import Login from './Login';
import Nav from './Nav';
import ExitPage from './ExitPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { propTypes } from 'react-bootstrap/esm/Image';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userID: '',
      responses: [],
      began_at: new Date(),
    }
  };

  postData() {
    fetch('http://localhost:8000/api/', {
      method: 'POST',
      credentials: "same-origin",
      headers: {
        // "X-CSRFToken": getCookie("csrftoken"),
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    })
    .then(response => response.json())
    .then(data => console.log("Data is ok", data))
    .catch(ex => console.log("parsing failed", ex));
}

  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path='/app' render={(props) => <ImageSearchTask/>} />
            <Route exact path='/thank-you' component={ExitPage} />
            <Route exact path='/' component={Login} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;