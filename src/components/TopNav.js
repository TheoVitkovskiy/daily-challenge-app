import React, { Component } from 'react';
import NavBarItem from './NavBarItem'


class TopNavTest extends Component {
  render() {
    return (
      <div>
        <div className="row">
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

export default TopNavTest
