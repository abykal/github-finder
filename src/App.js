import React, { Fragment, Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';

import Navbar from './components/Navbar'
import Alert from './components/Alert'
import About from './components/About'
import Users from './components/Users';
import User from './components/User';
import Search from './components/Search';



class App extends Component {
  state = {
    users: [],
    user: {},
    loading: false,
    alert: null
  };

  // Search GitHub users
  searchUsers = async text => {
    this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_GITHUB_CLIENT_ID}&cleint_secret=${process.env.REACT_GITHUB_CLEINT_SECRET}`
    );

    this.setState({ users: res.data.items, loading: false });
  }

  // Get single GitHub user
  getUser = async username => {
    this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_GITHUB_CLIENT_ID}&{client_secret=${process.env.REACT_GITHUB_CLIENT_SECRET}}`
    );

    this.setState({ user: res.data, loading: false });
  }

  // Clear users from state
  clearUsers = () => this.setState({users: [], loading: false });

  // Set Alert
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type }});

    setTimeout(() => this.setState({alert: null}), 5000);
  }

  render() {
    const { users, user, loading } = this.state;

    return (
      <Router>
        <div>
          <Navbar />
          <div className="container mx-auto p-4">
            <Alert alert={this.state.alert}/>
            <Switch>
              <Route exact path="/" render={props => (
                <Fragment>
                  <Search 
                    searchUsers={this.searchUsers}
                    clearUsers={this.clearUsers}
                    showClear={users.length > 0 ? true : false}
                    setAlert={this.setAlert}
                  />
                  <Users loading={loading} users={users} />
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
