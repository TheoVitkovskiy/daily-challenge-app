import React, { Component } from 'react';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton'
import { Link } from 'react-router-dom';


class TopNavTest extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col s4 m4">
            <Link
              to='/'
            >
            <RaisedButton label="Daily Challenge" primary={true} fullWidth style={{height: '50%'}} labelStyle={{ fontSize: 30, padding: 1, textTransform: 'none'}} buttonStyle={{height: 100, lineHeight: 1.45}} overlayStyle={{height: 100,   display: 'flex', justifyContent: 'center', flexDirection: 'column' }}
            />
            </Link>
          </div>
          <div className="col s4 m4">
            <Link
              to='/challenges'
            >
            <RaisedButton label="Challenge Overview" primary={true} fullWidth style={{height: '50%'}} labelStyle={{ fontSize: 30, padding: 1, textTransform: 'none'}} buttonStyle={{height: 100, lineHeight: 1.45}} overlayStyle={{height: 100,   display: 'flex', justifyContent: 'center', flexDirection: 'column' }}
            />
            </Link>
          </div>
          <div className="col s4 m4">
            <Link
              to='/progress'
            >
              <RaisedButton label="Challenge Progress" primary={true} fullWidth style={{height: '50%'}} labelStyle={{ fontSize: 30, padding: 1, textTransform: 'none'}} buttonStyle={{height: 100, lineHeight: 1.45}} overlayStyle={{height: 100,   display: 'flex', justifyContent: 'center', flexDirection: 'column' }}
              />
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default TopNavTest
