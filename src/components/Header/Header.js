import React, { Component } from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import withStyles from "@material-ui/core/styles/withStyles";
import headerStyle from "components/Header/HeaderStyle";
import HeaderLinks from "./HeaderLinks";

import Avatar from '@material-ui/core/Avatar';
import { connect } from "react-redux";
import * as actions from "actions";

class Header extends Component {

	_getInitials = (name) => {
		return name.toUpperCase().split('')[0]
	}

  _handleDrawerToggle = () => {
		// console.log("hello?")
    this.props.toggleDrawer(!this.props.navDrawer)
  }

  render() {
		const { classes, userInfo } = this.props;
		// console.log(this.props);
		
    return (
      <div>
        <AppBar position="static" className={classes.root}>
          <Toolbar className={classes.toolbar}>
            <Typography variant="h6" className={classes.title}>
              COMUNIDADOS
            </Typography>
      			{ (
							userInfo.username.length > 1 ? 
							<Avatar className={classes.avatar}>{this._getInitials(userInfo.username)}</Avatar>
							: <div /> 
						)}
						<IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              className={classes.menuButton}
              onClick={this._handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>

          <Drawer
						anchor="right"
            open={this.props.navDrawer}
						onClose={this._handleDrawerToggle}
						
          >
            <HeaderLinks {...this.props} />
          </Drawer>
        </AppBar>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
		navLocation: state.navLocation,
		navDrawer: state.navDrawer,
		preferredLanguage: state.preferredLanguage,
		userInfo: state.userInfo
  };
}

export default withStyles(headerStyle)(connect(mapStateToProps, actions)(Header));
