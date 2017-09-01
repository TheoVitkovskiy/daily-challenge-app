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
              isPrimary={true}
              linkTo={'/home'}
              label="Daily"
            >
            </NavBarItem>
          </div>
          <div className="col s4 m4">
            <NavBarItem
              isExact={false}
              isPrimary={true}
              linkTo={'/challenges'}
              label="Overview"
            >
            </NavBarItem>
          </div>
          <div className="col s4 m4">
            <NavBarItem
              isExact={false}
              isPrimary={true}
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
