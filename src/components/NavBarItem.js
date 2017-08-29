import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton'
import { Link } from 'react-router-dom';

class NavBarItem extends Component {
  render(){
    return(
      <Link
        activeClassItem="active"
        exact={this.props.isExact}
        to={this.props.linkTo}
      >
        <RaisedButton
          label={this.props.label}
          primary={true}
          fullWidth
          style={{height: '50%'}}
          labelStyle={{ fontSize: 30, padding: 1, textTransform: 'none'}}
          buttonStyle={{height: 100, lineHeight: 1.45}}
          overlayStyle={{height: 100,   display: 'flex', justifyContent: 'center', flexDirection: 'column' }}
        />
      </Link>
    )
  }
}

export default NavBarItem
