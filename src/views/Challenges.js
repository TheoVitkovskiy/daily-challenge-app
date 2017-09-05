  import React, { Component } from 'react';
  import { Card, CardTitle, CardText, CardMedia } from 'material-ui/Card';
  import DoneIcon from 'material-ui/svg-icons/action/done';

  /* Redux */
  import {connect} from 'react-redux'


  class Challenges extends Component {

    difficultyToColor = (chal) => {
      switch(chal.difficulty) {
        case 1: return "rgba(96, 169, 23, 0.9)"
        case 2: return "rgba(109, 135, 100, 0.9)"
        case 3: return "rgba(227, 200, 0, 0.9)"
        case 4: return "rgba(229, 20, 0, 0.9)"
        default: return "white"
      }
    }

    doneToBorder = (chal) => {
      if (chal.done){
        return '5px solid gold'
      } else {
        return 'none'
      }
    }

    doneToText = (chal) => {
      if (chal.done) {
        return " (COMPLETED)"
      } else {
        return " (FAILED MISERABLY)"
      }
    }

    createCardItems() {
      return this.props.challenges.slice(0).reverse().map((chal) => {
        if (chal.done){
          return (
            <div className="row">
              <div className="col s10 m10" style={{paddingRight: 0}}>
                <Card key={chal.id} style={{marginBottom: '2em', marginRight: '0em', marginTop: '2em', backgroundColor: this.difficultyToColor(chal) }}>
                  <CardTitle
                    actAsExpander={true}
                    showExpandableButton={true}
                    titleStyle={{marginRight: '1.5em'}}
                    title={chal.title + this.doneToText(chal)}
                  />
                  <CardMedia mediaStyle={{width: 500, height: 400}} expandable={true} style={{display: 'flex', justifyContent: 'center', flexDirection: 'row'}}>
                    <img src="https://placeimg.com/750/600/tech" alt="" />
                  </CardMedia>
                  <CardText style={{fontSize: 15}}>
                    {chal.date}
                  </CardText>
                </Card>
              </div>
              <div className="col s2 m2" style={{paddingLeft: 0}}>
                <Card key={chal.id} style={{marginBottom: '2em', marginLeft: '0em', marginTop: '2em', border: 'none', backgroundColor: 'rgb(58,114,56)'}}>
                  <CardText>
                    <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row', borderRadius: '25px'}}>

                        <DoneIcon style={{width: '80px', height: '84px', color: 'white'}}/>

                    </div>

                  </CardText>
                </Card>
              </div>
            </div>
          )
        } else {
          return (
            <div className="row" style={{marginBottom: 0}}>
              <div className="col s10 m10" style={{paddingRight: 0}}>
                <Card key={chal.id} style={{marginBottom: '2em', marginRight: '0em', marginTop: '2em', backgroundColor: this.difficultyToColor(chal) }}>
                  <CardTitle
                    actAsExpander={true}
                    showExpandableButton={true}
                    titleStyle={{marginRight: '1.5em'}}
                    title={chal.title + this.doneToText(chal)}
                  />
                  <CardMedia mediaStyle={{width: 500, height: 400}} expandable={true} style={{display: 'flex', justifyContent: 'center', flexDirection: 'row'}}>
                    <img src="https://placeimg.com/750/600/tech" alt="" />
                  </CardMedia>
                  <CardText style={{fontSize: 15}}>
                    {chal.date}
                  </CardText>
                </Card>
              </div>
            </div>
          )
        }

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
