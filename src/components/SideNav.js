import React, { Component } from 'react'
import Drawer from 'material-ui/Drawer'
import { List } from 'material-ui/List'

/* Material Icons */
import SettingsIcon from 'material-ui/svg-icons/action/settings'
import InfoIcon from 'material-ui/svg-icons/action/info'
import ListIcon from 'material-ui/svg-icons/action/list'
import FlareIcon from 'material-ui/svg-icons/image/flare'

import SideBarItem from './SideBarItem'

import MediaQuery from 'react-responsive'

const links = [
  { isExact: false, linkTo: '/settings', text: 'Settings', iconLeft: <SettingsIcon /> },
  { isExact: false, linkTo: '/challenges', text: 'Challenges', iconLeft: <ListIcon /> },
  { isExact: false, linkTo: '/achievements', text: 'Achievements', iconLeft: <FlareIcon /> },
  { isExact: false, linkTo: '/about', text: 'About', iconLeft: <InfoIcon /> }
]

class SideNav extends Component {


  handleClose = () => this.setState({ open: false })

  render() {
    return (
      <div>
        <MediaQuery query='(min-width: 625px)'>
          <Drawer
            open={this.props.open}
            docked={false}
            width={'30%'}
            onRequestChange={this.props.onRequestChange}
          >
            <List>
              {links.map((link, i) => {
                return (
                  <SideBarItem
                    isExact = { link.isExact }
                    linkTo = { link.linkTo }
                    primaryText = { link.text }
                    onClick = { this.handleClose }
                    iconLeft = { link.iconLeft }
                    key = { i }
                  />
                )
              })}
            </List>
          </Drawer>
        </MediaQuery>
        <MediaQuery query='(max-width: 625px)'>
          <Drawer
            open={this.props.open}
            docked={false}
            width={'35%'}
            onRequestChange={this.props.onRequestChange}
          >
            <List>
              {links.map((link, i) => {
                return (
                  <SideBarItem
                    isExact = { link.isExact }
                    linkTo = { link.linkTo }
                    primaryText = { link.text }
                    onClick = { this.handleClose }
                    iconLeft = { link.iconLeft }
                    key = { i }
                  />
                )
              })}
            </List>
          </Drawer>
        </MediaQuery>
      </div>
    )
  }
}

export default SideNav;
