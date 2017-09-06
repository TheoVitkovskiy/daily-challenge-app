import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton'
import { NavLink } from 'react-router-dom';
import Paper from 'material-ui/Paper'

class NavBarItem extends Component {
  render(){
    return(
      <Paper zDepth={3} style={{borderRadius: '30px'}}>
        <NavLink
          activeClassItem="active"
          exact={this.props.isExact}
          to={this.props.linkTo}
        >
          <RaisedButton
            label={this.props.label}
            primary={this.props.isPrimary}
            secondary={this.props.isSecondary}
            onClick={this.props.onClick}
            fullWidth
            style={this.props.style}
            labelStyle={this.props.labelStyle}
            buttonStyle={this.props.buttonStyle}
            overlayStyle={this.props.overlayStyle}
          />
        </NavLink>
      </Paper>
    )
  }
}

export default NavBarItem
