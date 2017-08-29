import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardMedia } from 'material-ui/Card';

class Challenges extends Component {
  render(){
    return(
      <div className="container">
        <Card style={{marginBottom: '2em', display: 'flex', justifyContent: 'center', flexDirection: 'row'}}>
          <CardTitle
            title="Walk up the mountain with skis on!"
          />
          <CardMedia mediaStyle={{width: 500, height: 400}}>
            <img src="https://placeimg.com/750/600/nature" alt="" />
          </CardMedia>
          <CardText>
            29.08.2017
          </CardText>
        </Card>
        <Card style={{marginBottom: '2em', display: 'flex', justifyContent: 'center', flexDirection: 'row'}}>
          <CardTitle
            title="Don't walk without your shoes on, ever!"
          />
          <CardMedia mediaStyle={{width: 500, height: 400}}>
            <img src="https://placeimg.com/750/600/arch" alt="" />
          </CardMedia>
          <CardText>
            30.08.2017
          </CardText>
        </Card>
        <Card style={{marginBottom: '2em', display: 'flex', justifyContent: 'center', flexDirection: 'row'}}>
          <CardTitle
            title="Don't chew on your T-Shirt whole day long!"
          />
          <CardMedia mediaStyle={{width: 500, height: 400}}>
            <img src="https://placeimg.com/750/600/tech" alt="" />
          </CardMedia>
          <CardText>
            31.08.2017
          </CardText>
        </Card>
        <Card style={{marginBottom: '2em', display: 'flex', justifyContent: 'center', flexDirection: 'row'}}>
          <CardTitle
            title="Don't walk without your shoes on, ever!"
          />
          <CardMedia mediaStyle={{width: 500, height: 400}}>
            <img src="https://placeimg.com/750/600/people" alt="" />
          </CardMedia>
          <CardText>
            01.09.2017
          </CardText>
        </Card>
        <Card style={{marginBottom: '2em', display: 'flex', justifyContent: 'center', flexDirection: 'row'}}>
          <CardTitle
            title="Don't chew on your T-Shirt whole day long!"
          />
          <CardMedia mediaStyle={{width: 500, height: 400}}>
            <img src="https://placeimg.com/750/600/animals" alt="" />
          </CardMedia>
          <CardText>
            02.09.2017
          </CardText>
        </Card>
        <Card style={{marginBottom: '2em', display: 'flex', justifyContent: 'center', flexDirection: 'row'}}>
          <CardTitle
            title="Walk up the mountain with skis on!"
          />
          <CardMedia mediaStyle={{width: 500, height: 400}}>
            <img src="https://placeimg.com/750/600/arch" alt="" />
          </CardMedia>
          <CardText>
            03.09.2017
          </CardText>
        </Card>
      </div>
    )
  }
}

export default Challenges
