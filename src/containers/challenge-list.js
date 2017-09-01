import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class ChallengeList extends Component {

  createListItems() {
    return this.props.challenges.map((chal) => {
      return (
        <li key={chal.id}>{chal.challenge} {chal.difficulty}</li>
      )
    })
  }

  render() {
    return (
      <ul>
        {this.createListItems()}
      </ul>
    );
  }

}

function mapStateToProps(state) {
  return {
    challenges: state.challenges
  };
}

export default connect(mapStateToProps)(ChallengeList);
