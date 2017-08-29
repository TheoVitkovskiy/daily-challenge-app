import React, { Component } from 'react';
import { Card, CardTitle, CardText} from 'material-ui/Card';

class Challenges extends Component {
  render(){
    return(
      <div className="container">
        <Card style={{marginBottom: '2em'}}>
          <CardTitle
            title="Walk up the mountain with skis on!"
          />
          <CardText>
            29.08.2017
          </CardText>
        </Card>
        <Card style={{marginBottom: '2em'}}>
          <CardTitle
            title="Don't walk without your shoes on, ever!"
          />
          <CardText>
            30.08.2017
          </CardText>
        </Card>
        <Card style={{marginBottom: '2em'}}>
          <CardTitle
            title="Walk up the mountain with skis on!"
          />
          <CardText>
            31.08.2017
          </CardText>
        </Card>
        <Card style={{marginBottom: '2em'}}>
          <CardTitle
            title="Don't walk without your shoes on, ever!"
          />
          <CardText>
            01.09.2017
          </CardText>
        </Card>
        <Card style={{marginBottom: '2em'}}>
          <CardTitle
            title="Walk up the mountain with skis on!"
          />
          <CardText>
            02.09.2017
          </CardText>
        </Card>
        <Card style={{marginBottom: '2em'}}>
          <CardTitle
            title="Walk up the mountain with skis on!"
          />
          <CardText>
            03.09.2017
          </CardText>
        </Card>
      </div>
    )
  }
}

export default Challenges
