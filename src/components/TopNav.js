import React, { Component } from 'react';
import NavBarItem from './NavBarItem'


class TopNav extends Component {
  render() {
    return (
      <div className="container resp" style={{position: 'absolute', left: 0, right: 0, top: 0, bottom: 0}} >
        <div className="row" >
          <div className="col s4 m4">
            <NavBarItem
              isExact={true}
              linkTo={'/'}
              label="Daily"
            >
            </NavBarItem>
          </div>
          <div className="col s4 m4">
            <NavBarItem
              isExact={false}
              linkTo={'/challenges'}
              label="Overview"
            >
            </NavBarItem>
          </div>
          <div className="col s4 m4">
            <NavBarItem
              isExact={false}
              linkTo={'/progress'}
              label="Progress"
            >
            </NavBarItem>
          </div>
        </div>
      </div>
    )
  }
}

export default TopNav
