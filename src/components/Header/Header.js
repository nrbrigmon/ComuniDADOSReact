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

import { connect } from "react-redux";
import * as actions from "actions";

class Header extends Component {
  _handleDrawerToggle = () => {
		// console.log("hello?")
    this.props.toggleDrawer(!this.props.navDrawer)
  }

  render() {
		const { classes } = this.props;
		// console.log(this.props);
		
    return (
      <div>
        <AppBar position="static" className={classes.root}>
          <Toolbar className={classes.toolbar}>
            <Typography variant="h6" className={classes.title}>
              COMUNIDADOS
            </Typography>
            {/* <Button color="inherit">Login</Button> */}
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
		preferredLanguage: state.preferredLanguage
  };
}

export default withStyles(headerStyle)(connect(mapStateToProps, actions)(Header));
