import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardMedia } from 'material-ui/Card';

/* Redux */
import {connect} from 'react-redux'


class Challenges extends Component {

  createCardItems() {
    return this.props.challenges.map((chal) => {
      return (
        <Card key={chal.id} style={{marginBottom: '2em', marginTop: '2em'}}>
          <CardTitle
            actAsExpander={true}
            showExpandableButton={true}
            titleStyle={{marginRight: '1.5em'}}
            title={chal.challenge}
          />
          <CardMedia mediaStyle={{width: 500, height: 400}} expandable={true} style={{display: 'flex', justifyContent: 'center', flexDirection: 'row'}}>
            <img src="https://placeimg.com/750/600/tech" alt="" />
          </CardMedia>
          <CardText>
          </CardText>
        </Card>
      )
    })
  }

  render() {
    return(
      <div className="container" style={{marginTop: '5em'}}>
        {this.createCardItems()}
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    challenges: state.challenges
  };
}

export default connect(mapStateToProps)(Challenges)
