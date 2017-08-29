import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton'
import { NavLink } from 'react-router-dom';
import Paper from 'material-ui/Paper'

class NavBarItem extends Component {
  render(){
    return(
      <Paper zDepth={3}>
        <NavLink
          activeClassItem="active"
          exact={this.props.isExact}
          to={this.props.linkTo}
        >
          <RaisedButton
            label={this.props.label}
            primary={true}
            fullWidth
            style={{height: '50%'}}
            labelStyle={{ fontSize: 30, padding: 1, textTransform: 'none', fontWeight: 30, letterSpacing: 1}}
            buttonStyle={{height: 70, lineHeight: 1.45}}
            overlayStyle={{height: 70,   display: 'flex', justifyContent: 'center', flexDirection: 'column' }}
          />
        </NavLink>
      </Paper>
    )
  }
}

export default NavBarItem
