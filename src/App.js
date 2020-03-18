import React, { Fragment, Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';

import Navbar from './components/Navbar'
import Alert from './components/Alert'
import About from './components/About'


class App extends Component() {
  state = {
    users: [],
    user: {},
    loading: false,
    alert: null
  };

  // Search GitHub users

  // Get single GitHub user

  // Clear users from state
  clearUsers = () => this.setState({users: [], loading: false });

  // Set Alert
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type }});

    setTimeout(() => this.setState({alert: null}), 5000);
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <div className="container mx-auto p-4">
            <Alert />
            <Switch>
              <Route exact path="/" render={props => (
                <Fragment>
                  <Search 
                    searchUsers={this.searchUsers}
                    clearUsers={this.clearUsers}
                    showClear={users.length > 0 ? true : false}
                    setAlert={this.setAlert}
                  />
                </Fragment>
              )}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/user/:login" render={props => (
                <User 
                  {...props}
                  getUser={this.getUser}
                  user={user}
                  loading={loading}
                />
              )}/>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
  
}

export default App;
