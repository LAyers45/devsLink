import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from './components/Wrapper/index'
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
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Onload} />
          <Wrapper>
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/main" component={Main} />
            <Route exact path="/user" component={UserPage} />
            <Route exact path="/devsearch" component={DevSearch} />
            <Route exact path="/devworks" component={DevWorks} />
            <Route exact path="/edit" component={EditUser} />
            <Route exact path="/project" component={Project} />
            <Route exact path="/createproject" component={CreateProject} />
            <Route exact path="/editproject" component={EditProject} />
          </Wrapper>
        </div>
      </Router>
    );
  }
}

export default App;
