import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import NavBarItem from '../components/NavBarItem'

import Countdown from 'react-countdown-now'

/* Redux */
import {connect} from 'react-redux'

const renderer = ({ hours, minutes, seconds }) => {
  return <span style={{fontSize: '100px', color: 'red'}}>{hours}:{minutes}:{seconds}</span>
}

class HomeAlt extends Component {


  render() {
    var currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 1);
    var day = currentDate.getDate();
    var monthNumber = currentDate.getMonth() + 1;
    var year = currentDate.getFullYear();

    var month = currentDate.toLocaleString("en-us", { month: "short" })

    return (
      <div className="container" style={{marginTop: '5em'}}>
        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row', marginTop: '2em'}}>

          <p style={{fontSize: 35, textAlign: 'center'}}> {this.props.challenges.slice(-1)[0].title} </p>

        </div>
        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row', marginTop: '1em'}}>

          <p style={{fontSize: 30}}> Time till the next Daily! </p>

        </div>
        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row', marginTop: '1em'}}>

          <Countdown
            date={ day + ' ' + month + ' ' + year + ' ' + '00:00:00'}
            renderer={renderer}
          />

        </div>

        <div className="container" style={{display: 'flex', justifyContent: 'center', flexDirection: 'row', marginTop: '2em'}}>
          <div className="col s6 m6" style={{marginRight: '2em'}}>
            <NavBarItem
              isExact={true}
              isSecondary={true}
              linkTo={'/'}
              label="Suffered through!"
            >
            </NavBarItem>
          </div>
          <div className="col s6 m6">
            <NavBarItem
              isExact={true}
              isSecondary={true}
              linkTo={'/'}
              label="Failed miserably!"
            >
            </NavBarItem>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    challenges: state.challenges
  }
}

export default connect(mapStateToProps)(HomeAlt)
