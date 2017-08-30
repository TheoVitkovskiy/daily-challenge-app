import React, { Component } from 'react'
import Clock from 'react-live-clock'
import { ApAnalogClock, ApAnalogClockStyle } from 'apeman-react-clock'
import Countdown from 'react-countdown-now'

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
      <div>
        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row', marginTop: '2em'}}>

          <p style={{fontSize: 35, textAlign: 'center'}}> Behalte Blickkontakt den ganzen Tag lang </p>

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
      </div>
    )
  }
}

export default HomeAlt
