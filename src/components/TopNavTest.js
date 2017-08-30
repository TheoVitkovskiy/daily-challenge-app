import React, { Component } from 'react';
import NavBarItem from './NavBarItem'
import { Tabs, Tab } from 'material-ui/Tabs'
import SwipeableViews from 'react-swipeable-views'

import Home from '../views/Home.js'
import Challenges from '../views/Challenges.js'
import Progress from '../views/Progress.js'



class TopNavTest extends Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };
  render() {
    return (
      <div className="container" style={{position: 'absolute', left: 0, right: 0, top: 0, bottom: 0}} >
        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
          style={{fontSize: 25}}
        >
          <Tab label="Daily" style={{fontSize: 24,  height: '80px', textTransform: 'none'}} value={0} />
          <Tab label="Overview" style={{fontSize: 24,  height: '80px', textTransform: 'none'}} value={1} />
          <Tab label="Progress" style={{fontSize: 24,  height: '80px', textTransform: 'none'}} value={2} />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          <div>
            <h1>Mama</h1>
          </div>
          <div>
            <h1>Papa</h1>
          </div>
          <div>
            <h1>Son</h1>
          </div>
        </SwipeableViews>
      </div>
    )
  }
}

export default TopNavTest
