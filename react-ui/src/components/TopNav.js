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
              linkTo={'/'}
              label="Daily"
              style={{height: '50%'}}
              labelStyle={{ fontSize: 30, padding: 1, textTransform: 'none', fontWeight: 30, letterSpacing: 1}}
              buttonStyle={{height: 75, lineHeight: 1.45}}
              overlayStyle={{height: 75,   display: 'flex', justifyContent: 'center', flexDirection: 'column'}}
            >
            </NavBarItem>
          </div>
          <div className="col s4 m4">
            <NavBarItem
              isExact={false}
              isPrimary={true}
              linkTo={'/challenges'}
              label="Overview"
              style={{height: '50%'}}
              labelStyle={{ fontSize: 30, padding: 1, textTransform: 'none', fontWeight: 30, letterSpacing: 1}}
              buttonStyle={{height: 75, lineHeight: 1.45}}
              overlayStyle={{height: 75,   display: 'flex', justifyContent: 'center', flexDirection: 'column'}}
            >
            </NavBarItem>
          </div>
          <div className="col s4 m4">
            <NavBarItem
              isExact={false}
              isPrimary={true}
              linkTo={'/progress'}
              label="Progress"
              style={{height: '50%'}}
              labelStyle={{ fontSize: 30, padding: 1, textTransform: 'none', fontWeight: 30, letterSpacing: 1}}
              buttonStyle={{height: 75, lineHeight: 1.45}}
              overlayStyle={{height: 75,   display: 'flex', justifyContent: 'center', flexDirection: 'column'}}
            >
            </NavBarItem>
          </div>
        </div>
      </div>
    )
  }
}

export default TopNav
