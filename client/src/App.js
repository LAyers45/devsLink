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
    username: null,
    email: null,
    loggedIn: false,
    id: null,
    SideDrawerOpen: false,
    github: null,
    website: null,
    specialization: null
  }
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { SideDrawerOpen: !prevState.SideDrawerOpen }
    });
  };

  backdropClickHandler = () => {
    this.setState({ SideDrawerOpen: false })
  };

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
        console.log(res.data.user._id);
        console.log(res.data.user.username);
        // console.log(res.data.user)
        this.setState({
          username: res.data.user.username,
          email: res.data.user.email,
          id: res.data.user._id,
          loggedIn: true,
          github: res.data.user.github,
          website: res.data.user.website,
          specialization: res.data.user.specialization

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
                email={this.state.email}
                loggedIn={this.state.loggedIn}
              />
            )}
            />

            <Route exact path="/signin" render={() => (
              <Signin
                username={this.state.username}
                email={this.state.email}
                loggedIn={this.state.loggedIn}
                updateUserInfo={this.updateUserInfo}
              />
            )}
            />

            <Route exact path="/signup" render={() => (
              <Signup
                username={this.state.username}
                email={this.state.email}
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
                  email={this.state.email}
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
                  email={this.state.email}
                  loggedIn={this.state.loggedIn}
                  id={this.state.id}
                  github={this.state.github}
                  website={this.state.website}
                  specialization={this.state.specialization}
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
                  email={this.state.email}
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
                  email={this.state.email}
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
                  email={this.state.email}
                  loggedIn={this.state.loggedIn}
                  id={this.state.id}
                  github={this.state.github}
                  website={this.state.website}
                  specialization={this.state.specialization}
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
                  email={this.state.email}
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
                  email={this.state.email}
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
                  email={this.state.email}
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
