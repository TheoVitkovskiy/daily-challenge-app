import React, { Component } from 'react';
import './styles/App.css';
import './styles/materialize-grid.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

/* Material-UI */
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import fusTheme from './components/fusTheme'

import TopNav from './components/TopNav';
import AppBar from 'material-ui/AppBar';
import SideNav from './components/SideNav';


/* Import Views */
import Home from './views/Home'
import Challenges from './views/Challenges'
import Progress from './views/Progress'
import HomeAlt from './views/HomeAlt'
import HomeAltDone from './views/HomeAltDone'

import MediaQuery from 'react-responsive'



class App extends Component {

  state = {
    showMenuButton: true,
    open: false
  }

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider muiTheme={getMuiTheme(fusTheme)}>
          <div>

            <MediaQuery query='(min-width: 725px)'>
              <AppBar
                titleStyle={{flex: 'none'}}
                style={{backgroundColor: '#424242', height: 80}}
                onLeftIconButtonTouchTap={this.handleToggle}
                showMenuIconButton={true}>
                <TopNav />
              </AppBar>
            </MediaQuery>

            <MediaQuery query='(max-width: 725px)'>
              <AppBar
                titleStyle={{flex: 'none'}}
                style={{backgroundColor: '#424242', height: 80}}
                onLeftIconButtonTouchTap={this.handleToggle}
                showMenuIconButton={false}
              >
                <TopNav />
              </AppBar>
            </MediaQuery>
            <SideNav open={this.state.open} onRequestChange={open => this.setState({ open })}  />

            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/home' component={HomeAlt} />
              <Route exact path='/homedone' component={HomeAltDone} />
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
