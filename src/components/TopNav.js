import React, { Component } from 'react';
import { Card, CardText } from 'material-ui/Card';
import { Link } from 'react-router-dom';



class TopNav extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col s4 m4">
            <Link
              to='/Home'
            >
              <Card>
                <CardText style={{textAlign: 'center'}}>
                  DAILY CHALLENGE
                </CardText>
              </Card>
            </Link>
          </div>
          <div className="col s4 m4">
            <Link
              to='/Home'
            >
              <Card>
                <CardText style={{textAlign: 'center'}}>
                  CHALLENGE OVERVIEW
                </CardText>
              </Card>
            </Link>
          </div>
          <div className="col s4 m4">
            <Link
              to='/Home'
            >
              <Card>
                <CardText style={{textAlign: 'center'}}>
                  CHALLENGE PROGRESS
                </CardText>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default TopNav
