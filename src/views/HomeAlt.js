import React, { Component } from 'react'
import NavBarItem from '../components/NavBarItem'

import Countdown from 'react-countdown-now'

/* Redux */
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {updateDone} from '../actions/index';

import { Redirect } from 'react-router';

const renderer = ({ hours, minutes, seconds }) => {
  return <span style={{fontSize: '120px', color: '#c24541'}}>{hours}:{minutes}:{seconds}</span>
}


class HomeAlt extends Component {

  difficultyToText = (chal) => {
    switch(chal.difficulty) {
      case 1: return "EAAASY!"
      case 2: return "DID IT!"
      case 3: return "MADE IT!!!"
      case 4: return "SUFFERED THROUGH!"
      default: return "white"
    }
  }

  render() {
    var currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 1);
    var day = currentDate.getDate();
    var year = currentDate.getFullYear();

    var month = currentDate.toLocaleString("en-us", { month: "short" })

    const currentChallenge = this.props.challenges.slice(-1)[0];
    let hasCompletedToday = currentChallenge.done;
    console.log(hasCompletedToday);
    if (!hasCompletedToday){
      return (
        <div className="container" style={{marginTop: '3em'}}>
          <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row', borderRadius: '25px'}}>

            <p style={{fontSize: 48, fontWeight: 500, textAlign: 'center'}}>{currentChallenge.title}</p>

          </div>
          <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row'}}>

            <Countdown
              date={ day +
                     ' ' +
                     month +
                     ' ' +
                     year +
                     ' ' +
                     '00:00:00'}
              renderer={renderer}
            />

          </div>

          <div className="container" style={{display: 'flex', justifyContent: 'center', flexDirection: 'row', marginTop: '5em', marginBottom: '5em'}}>
            <NavBarItem
              isExact={true}
              isSecondary={true}
              linkTo={'/homedone'}
              label={this.difficultyToText(currentChallenge)}
              onClick={() => this.props.updateDone()}
              style={{height: '50%', borderRadius: '25px'}}
              labelStyle={{ fontSize: 40, padding: 1, textTransform: 'none', fontWeight: 30, letterSpacing: 1}}
              buttonStyle={{height: 200, width: 500, lineHeight: 1.45, borderRadius: '30px'}}
              overlayStyle={{height: 200, display: 'flex', justifyContent: 'center', flexDirection: 'column', borderRadius: '30px' }}
            >
            </NavBarItem>
          </div>



        </div>
      )
    } else {
      return (
        <Redirect to="/homedone" />
      )
    }

  }
}

function mapStateToProps(state) {
  return {
    challenges: state.challenges
  }
}

function matchDispatchToProps(dispatch){
   return bindActionCreators({updateDone: updateDone}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(HomeAlt)
