import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Link, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import About from './About';
import CountactUs from './ContactUs';
import Logout from './Logout';
import Chat from './Chat';
import Network from './Network';
import AddMeetup from './AddMeetup';
import ShowAllMeetups from './ShowAllMeetups';
import News from './news';
import Footer from './Footer';

class App extends Component {
  state = { user: JSON.parse(sessionStorage.getItem('user')) };
  setUser = user => {
    this.setState({ user: user });
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <nav>
            <Link to='/'>Home</Link>
            {!this.state.user ? <Link to='/Login'>Login</Link> : ""}
            {!this.state.user ? <Link to='/Register'>Register</Link> : ""}
            {this.state.user ? <Link to='/About'>About us</Link> : ""}
            {this.state.user ? <Link to='/Chat'>Chat</Link> : ""}
            {this.state.user ? <Link to='/Network'>Network</Link> : ""}
            {this.state.user ? <Link to='/CountactUs'></Link> : ""}
            {this.state.user ? <Link to='/AddMeetup'>Add Meetup</Link> : ""}
            {this.state.user ? <Link to='/ShowAllMeetups'>Show All Meetups</Link> : ""}
            {this.state.user ? <Link to='/news'>news</Link> : ""}
            {this.state.user ? <Link to='/Logout'>Logout</Link> : ""}
          </nav>
          <content>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/Login' render={() => <Login setUser={this.setUser} />} />
              <Route exact path='/Register' render={() => <Register setUser={this.setUser} />} />
              <Route render={() => {
                if (!this.state.user) {
                  return <Redirect to="/Logout" />
                }
                return (

                  <Switch>

                    <Route exact path='/About' component={About} />
                    <Route exact path='/Chat' component={Chat} />
                    <Route exact path='/Network' component={Network} />
                    <Route exact path='/CountactUs' render={() => <CountactUs setUser={this.setUser} />} />
                    <Route exact path='/AddMeetup' component={AddMeetup} />
                    <Route exact path='/ShowAllMeetups' component={ShowAllMeetups} />
                    <Route exact path='/news' component={News} />
                    <Route exact path='/Logout' render={() => <Logout setUser={this.setUser} />} />

                  </Switch>

                );
              }} />
            </Switch>

          </content>
          <Footer />
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
