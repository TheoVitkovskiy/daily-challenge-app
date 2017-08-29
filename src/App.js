import React, { Component } from 'react';
import './styles/App.css';
import './styles/materialize-grid.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import TopNav from './components/TopNav.js';

/* Import Views */
import Home from './views/Home.js'
import Challenges from './views/Challenges.js'
import Progress from './views/Progress.js'





class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider>
          <div>
            <TopNav />

            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/challenges' component={Challenges} />
              <Route path='/progress' component={Progress} />
            </Switch>
          </div>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
