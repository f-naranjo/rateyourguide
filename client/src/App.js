import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/Login/Login';
import LoginGuide from './components/Login/LoginGuide';
import SignUp from './components/Signup/Signup';
import AuthService from './services/AuthService';
import TourService from './services/TourService';
import FormBook from './components/Public/FormBook/FormBook';
import FormToday from './components/Public/FormToday/FormToday';
import PageAvailableTours from './components/Public/PageAvailableTours/PageAvailableTours';
import Navbar from './components/Public/Navbar/Navbar';
import PageSessionDetail from './components/Public/PageSessionDetail/PageSessionDetail';
import PageGuidesNow from './components/Public/PageGuidesNow/PageGuidesNow';
import PageGuidesBook from './components/Public/PageGuidesBook/PageGuidesBook';
import Home from './components/Public/Home/Home';
import GuideHome from './components/Guide/GuideHome/GuideHome';
import GuideSidebar from './components/Guide/GuideSidebar/GuideSidebar';
import GuideTour from './components/Guide/GuideTours/GuideTours';
import GuideCalendar from './components/Guide/GuideCalendar/GuideCalendar';
import GuideComments from './components/Guide/GuideComments/GuideComments';
import GuideProfile from './components/Guide/GuideProfile/GuideProfile';
import GuideSessions from './components/Guide/GuideSessions/GuideSessions';
import GuideCreateTour from './components/Guide/GuideCreateTour/GuideCreateTour';
import GuideEditTour from './components/Guide/GuideEditTour/GuideEditTour';
import GmapsPlaces from './components/Gmaps/GmapsPlaces/GmapsPlaces';
import GmapMap from './components/Gmaps/Gmaps Map/GmapsMap';
import GuideCreateSessions from './components/Guide/GuideCreateSessions/GuideCreateSessions';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.authService = new AuthService();
    this.tourService = new TourService();
  }

  state = {
    user: null,
    filterParams: undefined,
  }

  setUser = (user) => {
    this.setState({ ...this.state, user })
  }

  fetchUser = () => {
    if (this.state.user === null) {
      this.authService.loggedIn()
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

  updateUser = () =>{
    this.authService.loggedIn()
    .then(
      (user) => {
        this.setUser(user)
        this.setHome()
      },
      (error) => {
        this.setUser(false)
      }
    )
    .catch(() => {
      this.setUser(false)
    })
  }

  componentDidMount() {
    this.fetchUser()
  }


  handleFilterParams(filterParams) {
    console.log("entra")
    this.setState({
      ...this.state,
      filterParams: filterParams
    })
  }


  render() {
    this.fetchUser()
    
    if(!this.state.user){
      return(
        <div className="App-Clients">
            <Navbar></Navbar>
            <Switch>
            <Route exact path="/loginGuide" render={(match) => <LoginGuide {...match} setUser={this.setUser} />} />
            {/* <Route exact paht="/google" render={(match) =><div className="google-test"> <GmapsPlaces {...match} setUser={this.setUser} /><GmapMap /></div>} />  */}
              <Route exact path="/" render={(match) => <Home {...match} />} />
              <Route exact path="/book/now" render={(match) => <FormToday handleFilterParams={() => this.handleFilterParams()}  {...match} />} />
              <Route exact path="/book" render={(match) => <FormBook {...match} />} />
              <Route exact path="/book/guides" render={(props) => <PageGuidesBook {...props}></PageGuidesBook>} />
              <Route exact path="/book/now/guides" render={(props) => <PageGuidesNow {...props}></PageGuidesNow>} />
              <Route exact path="/book/guide/tours" render={(props) => <PageAvailableTours {...props}></PageAvailableTours>} />
              <Route exact path="/book/guide/tour/session" render={(props) => <PageSessionDetail {...props}></PageSessionDetail>} />
              <Route exact path="/login" render={(match) => <Login {...match} setUser={this.setUser} />} />
              <Route exact path="/signup" render={(match) => <SignUp {...match} setUser={this.setUser} />} />
            </Switch>
          </div>
      )
    }
    if(this.state.user.name){
      return(
        <div className="App-Clients">
            <Navbar></Navbar>
            <Switch>
            <Route exact path="/loginGuide" render={(match) => <LoginGuide {...match} setUser={this.setUser} />} />
              <Route exact path="/" render={(match) => <Home {...match} />} />
              <Route exact path="/book/now" render={(match) => <FormToday handleFilterParams={() => this.handleFilterParams()}  {...match} />} />
              <Route exact path="/book" render={(match) => <FormBook {...match} />} />
              <Route exact path="/book/guides" render={(props) => <PageGuidesBook {...props}></PageGuidesBook>} />
              <Route exact path="/book/now/guides" render={(props) => <PageGuidesNow {...props}></PageGuidesNow>} />
              <Route exact path="/book/guide/tours" render={(props) => <PageAvailableTours {...props}></PageAvailableTours>} />
              <Route exact path="/book/guide/tour/session" render={(props) => <PageSessionDetail {...props}></PageSessionDetail>} />
              <Route exact path="/login" render={(match) => <Login {...match} setUser={this.setUser} />} />
              <Route exact path="/signup" render={(match) => <SignUp {...match} setUser={this.setUser} />} />
            </Switch>
          </div>
      )
    }
    if(this.state.user.info){
      return(
        <div className="App-Guides">
            <GuideSidebar/>
            <Switch>
              <Route exact path="/guides/adminpanel" render={(match) => <GuideHome updateUser={(e) => this.updateUser(e)} {...match}/>} />
              <Route exact path="/guides/adminpanel/sessions" render={(match) =><GuideSessions updateUser={(e) => this.updateUser(e)} {...match} /> } />
              <Route exact path="/guides/adminpanel/sessions/create" render={(match) =><GuideCreateSessions updateUser={(e) => this.updateUser(e)} {...match} /> } />
              <Route exact path="/guides/adminpanel/tours" render={(match) => <GuideTour updateUser={(e) => this.updateUser(e)} {...match} />}/>
              <Route exact path="/guides/adminpanel/tour/create" render={(match) => <GuideCreateTour updateUser={(e) => this.updateUser(e)} {...match} />}/>
              <Route exact path="/guides/adminpanel/tour/edit" render={(match) => <GuideEditTour updateUser={(e) => this.updateUser(e)} {...match} />}/>
              <Route exact path="/guides/adminpanel/calendar" render={(match) => <GuideCalendar updateUser={(e) => this.updateUser(e)} {...match} />} />
              <Route exact path="/guides/adminpanel/comments" render={(match) => <GuideComments updateUser={(e) => this.updateUser(e)} {...match} />} />
              <Route exact path="/guides/adminpanel/profile" render={(match) => <GuideProfile updateUser={(e) => this.updateUser(e)} {...match} />} />
            </Switch>
          </div>
      )
    }
    return(<h1>Cargando...</h1>)

  }
}

export default App;
