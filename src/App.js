import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from './Home';
import { About } from './About';
import { OurTeam } from './OurTeam';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavBar';
import { Jumbotron } from './components/Jumbotron';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
        <NavigationBar />
        <Jumbotron />
        <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/ourteam" component={OurTeam} />
              <Route component={NoMatch} />
            </Switch>
        </Layout>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
