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
import SideDrawer from '../src/components/SideDrawer/SideDrawer';
import BackDrop from '../src/components/BackDrop/BackDrop'
import Navbar from './components/Navbar/Navbar';



class App extends Component {
  state = {
    SideDrawerOpen: false
  }
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { SideDrawerOpen: !prevState.SideDrawerOpen }
    });
  };

  backdropClickHandler = () => {
    this.setState({ SideDrawerOpen: false })
  };

  constructor() {
    super();
    this.state = {
      username: null,
      email: null,
      loggedIn: false
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.bindUser = this.bindUser.bind(this);
    this.updateUserInfo = this.updateUserInfo.bind(this);
  }

  componentDidMount() {
    this.bindUser();
  }

  updateUserInfo(info) {
    this.setState(info)
  }

  bindUser() {
    axios.get("api/users/").then(res => {
      if (res.data.user) {
        console.log("Congrats there is a user");
        console.log(res.data.user.username);
        this.setState({
          username: res.data.user.username,
          email: res.data.user.email,
          loggedIn: res.data.user.loggedIn
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
    let backdrop;

    if (this.state.SideDrawerOpen) {
      backdrop = <BackDrop click={this.backdropClickHandler} />;
    }
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
              <React.Fragment>
                <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
                <SideDrawer show={this.state.SideDrawerOpen} />
                {backdrop}
                <Main
                  username={this.state.username}
                  email={this.state.username}
                  loggedIn={this.state.loggedIn}
                />
              </React.Fragment>
            )}
            />

            <Route exact path="/user" render={() => (
              <React.Fragment>
                <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
                <SideDrawer show={this.state.SideDrawerOpen} />
                {backdrop}
                <UserPage
                  username={this.state.username}
                  email={this.state.username}
                  loggedIn={this.state.loggedIn}
                />
              </React.Fragment>
            )}
            />

            <Route exact path="/devsearch" render={() => (
              <React.Fragment>
                <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
                <SideDrawer show={this.state.SideDrawerOpen} />
                {backdrop}
                <DevSearch
                  username={this.state.username}
                  email={this.state.username}
                  loggedIn={this.state.loggedIn}
                />
              </React.Fragment>
            )}
            />

            <Route exact path="/devworks" render={() => (
              <React.Fragment>
                <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
                <SideDrawer show={this.state.SideDrawerOpen} />
                {backdrop}
                <DevWorks
                  username={this.state.username}
                  email={this.state.username}
                  loggedIn={this.state.loggedIn}
                />
              </React.Fragment>
            )}
            />

            <Route exact path="/edit" render={() => (
              <React.Fragment>
                <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
                <SideDrawer show={this.state.SideDrawerOpen} />
                {backdrop}
                <EditUser
                  username={this.state.username}
                  email={this.state.username}
                  loggedIn={this.state.loggedIn}
                />
              </React.Fragment>
            )}
            />

            <Route exact path="/project" render={() => (
              <React.Fragment>
                <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
                <SideDrawer show={this.state.SideDrawerOpen} />
                {backdrop}
                <Project
                  username={this.state.username}
                  email={this.state.username}
                  loggedIn={this.state.loggedIn}
                />
              </React.Fragment>
            )}
            />

            <Route exact path="/createproject" render={() => (
              <React.Fragment>
                <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
                <SideDrawer show={this.state.SideDrawerOpen} />
                {backdrop}
                <CreateProject
                  username={this.state.username}
                  email={this.state.username}
                  loggedIn={this.state.loggedIn}
                />
              </React.Fragment>
            )}
            />

            <Route exact path="/editproject" render={() => (
              <React.Fragment>
                <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
                <SideDrawer show={this.state.SideDrawerOpen} />
                {backdrop}
                <EditProject
                  username={this.state.username}
                  email={this.state.username}
                  loggedIn={this.state.loggedIn}
                />
              </React.Fragment>
            )}
            />

          </Switch>
        </div>
      </Router>
    );
  }
}


export default App;
