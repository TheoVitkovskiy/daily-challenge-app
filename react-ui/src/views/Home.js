import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import RaisedButton from 'material-ui/RaisedButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import { NavLink } from 'react-router-dom';
import { Redirect } from 'react-router';

import { v4 } from 'uuid';

/* Redux */
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {addChallenge} from '../actions/index';

const items = [
  <MenuItem key={1} value={1} primaryText="Easy" style={{color: 'rgba(96, 169, 23, 0.9)'}} />,
  <MenuItem key={2} value={2} primaryText="Normal" style={{color: 'rgba(109, 135, 100, 0.9)'}} />,
  <MenuItem key={3} value={3} primaryText="Difficult" style={{color: 'rgba(227, 200, 0, 0.9)'}}/>,
  <MenuItem key={4} value={4} primaryText="Very Difficult" style={{color: 'rgba(229, 20, 0, 0.9)'}}/>,
];


const currentDate = new Date();
const month = currentDate.getMonth() + 1;
const formattedCurrentDate = currentDate.getDate() + '.' + month + '.' + currentDate.getFullYear();

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      difficulty: null,
      title: '',
      date: formattedCurrentDate,
      done: false
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }


  handleInputChange(event) {

    const target = event.target;
    const value = event.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name] : value
    });
  }

  handleChange = (event, index, value) => this.setState({difficulty: value})



  render(){

    let hasSubmittedToday = (this.props.challenges.slice(-1)[0].date === this.state.date) ? true : false;
    console.log(this.props.challenges.slice(-1)[0].date);
    console.log(this.state.date);
    console.log(hasSubmittedToday);

    if (!hasSubmittedToday) {
      return(
        <div className="container" style={{marginTop: '5em'}}>
          <TextField
            onChange={this.handleInputChange}
            value={this.state.title}
            hintText="Enter your challenge for the day!"
            name="title"
            hintStyle={{fontSize: 24, color: 'rgb(150, 150, 150)'}}
            inputStyle={{fontSize: 24}}
            fullWidth
          />
          <SelectField
            onChange={this.handleChange}
            value={this.state.difficulty}
            hintText="How difficult would you rate this challenge?"
            name="difficulty"
            menuItemStyle={{fontSize: 24}}
            labelStyle={{fontSize: 24}}
            hintStyle={{fontSize: 24, color: 'rgb(150, 150, 150)'}}
            fullWidth
          >
            {items}
          </SelectField>
          <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row', margin: '2em 0'}}>
            <RaisedButton
              label="Choose an Image"
              labelStyle={{fontSize: 16}}
            >
              <input id='upload' type="file" style={{cursor: 'pointer', position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, width: '100%', opacity: 0}} />
            </RaisedButton>
          </div>

          <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row'}}>
          <NavLink
            exact={false}
            to={'/home'}
          >
            <FloatingActionButton onClick={() => this.props.addChallenge({
              id: v4(),
              title: this.state.title,
              difficulty: this.state.difficulty,
              date: this.state.date,
              done: this.state.done
            })}>
              <ContentAdd />
            </FloatingActionButton>
          </NavLink>
          </div>
        </div>
      )
    } else {
      return (
        <Redirect to='/home'/>
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
   return bindActionCreators({addChallenge: addChallenge}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Home)
