import React, { Component } from 'react';

/* Redux */
import {connect} from 'react-redux'

class HomeAltDone extends Component {
  render() {
      let success = this.props.challenges.slice(-1)[0].done;
      if (success){
        return (
          <div>
            <h1>You are AMAZING!</h1>
          </div>
        )
      } else {
        return (
        <div>
          <h1>You failed MISERABLY</h1>
        </div>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    challenges: state.challenges
  }
}

export default connect(mapStateToProps)(HomeAltDone);
