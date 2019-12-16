import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
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
    const { user } = this.state;
    return (
      <div className="App">
        {user &&
          <div className="App-Clients">
            {/* <Navbar></Navbar> */}
            <Switch>
              <Route exact path="/" render={(match) => <Home {...match} />} />
              <Route exact path="/book/now" render={(match) => <FormToday handleFilterParams={() => this.handleFilterParams()}  {...match} />} />
              <Route exact path="/book" render={(match) => <FormBook {...match} />} />
              <Route exact path="/book/guides" render={(props) => <PageGuidesBook {...props}></PageGuidesBook>} />
              <Route exact path="/book/now/guides" render={(props) => <PageGuidesNow {...props}></PageGuidesNow>} />
              <Route exact path="/book/guide/tours" render={(props) => <PageAvailableTours {...props}></PageAvailableTours>} />
              <Route exact path="/book/guide/tour/session" render={(props) => <PageSessionDetail {...props}></PageSessionDetail>} />
            </Switch>
          </div>
        }
        {!user &&
          <div className="App-Clients">
            {/* <Navbar></Navbar> */}
            <Switch>
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
          </div>}
        {user &&
          <div className="App-Guides">
            <GuideSidebar/>
            <Switch>
              <Route exact path="/guides/adminpanel" render={(match) => <GuideHome {...match}/>} />
              <Route exact path="/guides/adminpanel/sessions" render={(match) =><GuideSessions {...match} /> } />
              <Route exact path="/guides/adminpanel/tours" render={(match) => <GuideTour {...match} />}/>
              <Route exact path="/guides/adminpanel/tour/create" render={(match) => <GuideCreateTour {...match} />}/>
              <Route exact path="/guides/adminpanel/calendar" render={(match) => <GuideCalendar {...match} />} />
              <Route exact path="/guides/adminpanel/comments" render={(match) => <GuideComments {...match} />} />
              <Route exact path="/guides/adminpanel/profile" render={(match) => <GuideProfile {...match} />} />
            </Switch>
          </div>
        }
        {!user &&
          <div className="App-Guides">
            <Switch>
              <Route exact path="/loginGuide" render={(match) => <LoginGuide {...match} setUser={this.setUser} />} />
            </Switch>
          </div>
        }
      </div>
    );
  }
}

export default App;
