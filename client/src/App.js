import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import SignUp from './components/Signup/Signup';
import AllTours from './components/AllTours/AllTours';
import AuthService from './services/AuthService';
import TourService from './services/TourService';
import PrivateRoute from './guards/PrivateRoute';
import FormBook from './components/Public/FormBook/FormBook';
import FormToday from './components/Public/FormToday/FormToday';
import PageGuide from './components/Public/PageGuides/PageGuides';

class App extends React.Component {
  constructor(props) {
    super(props);
   
    this.authService = new AuthService();
    this.tourService = new TourService();
  }

  state = {
    user: null
  }

  setUser = (user) => {
    this.setState({ ...this.state, user })
  }

  fetchUser = () => {
    if (this.state.user === null) {
      this.authService.loggedInUser()
        .then(
          (user) => {
            this.setUser(user)
          },
          (error) => {
            this.setUser(false)
          }
        )
        .catch(() => {
          this.setUser(false)
        })
    }
  }

  componentDidMount() {
    this.fetchUser()
  }

  render() {
    this.fetchUser()
    const { user } = this.state;
    return (
      <div className="App">
        
          {user && <Switch>
            <Route exact path="/tours" render={(match) =>  <AllTours {...match} />} />
            <Route exact path="/login" render={(match) => <Login {...match} setUser={this.setUser} />} />  
            <Route exact path="/signup" render={(match) => <SignUp {...match} setUser={this.setUser} />} />
            {/* <PrivateRoute exact path="/" user={user} component={TodoList} /> */}
          </Switch> }
          {!user && <Switch>
            <Route exact path="/book/guides" render={(match) =>  <PageGuide></PageGuide> }/>
            <Route exact path="/booknow" render={(match) =>  <FormToday {...match} />} />
            <Route exact path="/book" render={(match) =>  <FormBook {...match} />} />
            <Route exact path="/tours" render={(match) =>  <AllTours {...match} />} />
            <Route exact path="/login" render={(match) => <Login {...match} setUser={this.setUser} />} />  
            <Route exact path="/signup" render={(match) => <SignUp {...match} setUser={this.setUser} />} />
            {/* <PrivateRoute exact path="/" user={user} component={TodoList} /> */}
          </Switch> }
        
      </div>
    );
  }
}

export default App;
