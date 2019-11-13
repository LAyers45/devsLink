import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
// Page Import
import Onload from './Pages/Onload/OnLoad';
import Signin from './Pages/SignIn/SignIn';
import Signup from './Pages/SignUp/SignUp';
import Main from './Pages/MainPage/MainPage';
import UserPage from './Pages/UserPage/UserPage';
import DevSearch from './Pages/DevSearch/DevSearch';
import DevWorks from './Pages/DevWorks/DevWorks';
import EditUser from './Pages/EditUser/EditUser';
import Project from './Pages/Project/Project';
import CreateProject from './Pages/CreateProject/CreateProject';
import EditProject from './Pages/EditProject/EditProject';

class App extends Component {
  state = {
    username: null,
    email: null,
    loggedIn: false
  }

  componentDidMount() {
    this.bindUser();
  }

  updateUserInfo = (info) => {
    this.setState(info)
  }

  bindUser = () => {
    axios.get("/api/user/").then(res => {
      if (res.data.user) {
        console.log("Congrats there is a user");
        console.log(res.data.user.username);
        this.setState({
          username: res.data.user.username,
          email: res.data.user.email,
          loggedIn: true
        });
      } else {
        console.log("Curses there is no user");
        this.setState({
          username: null,
          email: null,
          loggedIn: false
        });
      }
    });
  }


  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" render={() => (
              <Onload
                username={this.state.username}
                email={this.state.username}
                loggedIn={this.state.loggedIn}
              />
            )}
            />

            <Route exact path="/signin" render={() => (
              <Signin
                username={this.state.username}
                email={this.state.username}
                loggedIn={this.state.loggedIn}
                updateUserInfo={this.updateUserInfo}
              />
            )}
            />

            <Route exact path="/signup" render={() => (
              <Signup
                username={this.state.username}
                email={this.state.username}
                loggedIn={this.state.loggedIn}
              />
            )}
            />

            <Route exact path="/main" render={() => (
              <Main
                username={this.state.username}
                email={this.state.username}
                loggedIn={this.state.loggedIn}
              />
            )}
            />

            <Route exact path="/user" render={() => (
              <UserPage
                username={this.state.username}
                email={this.state.username}
                loggedIn={this.state.loggedIn}
              />
            )}
            />

            <Route exact path="/devsearch" render={() => (
              <DevSearch
                username={this.state.username}
                email={this.state.username}
                loggedIn={this.state.loggedIn}
              />
            )}
            />

            <Route exact path="/devworks" render={() => (
              <DevWorks
                username={this.state.username}
                email={this.state.username}
                loggedIn={this.state.loggedIn}
              />
            )}
            />

            <Route exact path="/edit" render={() => (
              <EditUser
                username={this.state.username}
                email={this.state.username}
                loggedIn={this.state.loggedIn}
              />
            )}
            />

            <Route exact path="/project" render={() => (
              <Project
                username={this.state.username}
                email={this.state.username}
                loggedIn={this.state.loggedIn}
              />
            )}
            />

            <Route exact path="/createproject" render={() => (
              <CreateProject
                username={this.state.username}
                email={this.state.username}
                loggedIn={this.state.loggedIn}
              />
            )}
            />

            <Route exact path="/editproject" render={() => (
              <EditProject
                username={this.state.username}
                email={this.state.username}
                loggedIn={this.state.loggedIn}
              />
            )}
            />

          </Switch>
        </div>
      </Router>
    );
  }
}


export default App;
