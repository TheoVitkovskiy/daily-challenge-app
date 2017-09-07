import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { ListItem } from 'material-ui/List'


class SideBarItem extends Component {
  render() {
    return(
      <NavLink
        activeClassItem = "active"
        exact = { this.props.isExact }
        to = { this.props.linkTo }
        key = { this.props.i }
      >
        <ListItem
          hoverColor = "#eee"
          leftIcon = { this.props.iconLeft }
          style={{fontSize: '22px', height: '75px'}}
          primaryText = { this.props.primaryText }
          onTouchTap = { this.props.onClick }
        />
      </NavLink>
    )
  }
}

export default SideBarItem;
