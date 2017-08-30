import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import RaisedButton from 'material-ui/RaisedButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import { NavLink } from 'react-router-dom';


const items = [
  <MenuItem key={1} value={1} primaryText="Very Difficult" style={{color: 'red'}} />,
  <MenuItem key={2} value={2} primaryText="Difficult" style={{color: 'orange'}} />,
  <MenuItem key={3} value={3} primaryText="Normal" style={{color: 'grey'}}/>,
  <MenuItem key={4} value={4} primaryText="Easy" style={{color: 'green'}}/>,
];

class Home extends Component {

  state = {
    value: null,
  }

  handleChange = (event, index, value) => this.setState({value})

  render(){
    return(
      <div className="container">
        <TextField
          floatingLabelText="Enter your challenge for the day!"
          floatingLabelStyle={{fontSize: 24}}
          inputStyle={{fontSize: 24}}
          fullWidth
        />
        <SelectField
          value={this.state.value}
          onChange={this.handleChange}
          hintText="How difficult would you rate this challenge?"
          menuItemStyle={{fontSize: 26}}
          labelStyle={{fontSize: 24}}
          hintStyle={{fontSize: 24}}
          fullWidth
        >
        {items}
        </SelectField>
        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row', margin: '2em 0'}}>
          <RaisedButton
            label="Choose an Image"
            labelStyle={{fontSize: 16}}
          >
            <input type="file" style={{cursor: 'pointer', position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, width: '100%', opacity: 0}} />
          </RaisedButton>
        </div>
        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row'}}>
        <NavLink
          exact={false}
          to={'/home'}
        >
          <FloatingActionButton>
            <ContentAdd />
          </FloatingActionButton>
        </NavLink>
        </div>
      </div>
    )
  }
}

export default Home
