import React, { Component } from 'react';

/* Redux */
import {connect} from 'react-redux'

class HomeAltDone extends Component {
  render() {
      return (
        <div className="container">
          <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row', borderRadius: '25px', marginTop: '5em'}}>

            <img src="https://www.teetee.eu/app/uploads/2015/03/design_conbg_201406015347.png"/>

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

export default connect(mapStateToProps)(HomeAltDone);
