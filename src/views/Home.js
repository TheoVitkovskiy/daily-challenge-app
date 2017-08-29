import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';


const items = [
  <MenuItem key={1} value={1} primaryText="Very Difficult" />,
  <MenuItem key={2} value={2} primaryText="Difficult" />,
  <MenuItem key={3} value={3} primaryText="Normal" />,
  <MenuItem key={4} value={4} primaryText="Easy" />,
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
        <FloatingActionButton style={{marginLeft: '45%',}}>
          <ContentAdd />
        </FloatingActionButton>
      </div>
    )
  }
}

export default Home
