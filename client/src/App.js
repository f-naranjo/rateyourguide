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
import PageGuides from './components/Public/PageGuides/PageGuides';
import PageTours from './components/Public/PageTours/PageTours';

class App extends React.Component {
  constructor(props) {
    super(props);
   
    this.authService = new AuthService();
    this.tourService = new TourService();
  }

  state = {
    user: null,
    filterParams:undefined,
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

 
  handleFilterParams(filterParams){
      console.log("entra")
        this.setState({
          ...this.state,
          filterParams: filterParams
        })
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

            <Route exact path="/book/guides" render={(props) =>
             <PageGuides {...props}></PageGuides> }/> 
            <Route exact path="/book/guide/tours" render={(match) =>  <PageTours></PageTours> }/>
            <Route exact path="/booknow" render={(match) =>  <FormToday handleFilterParams={()=>this.handleFilterParams()}  {...match} />} />
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
