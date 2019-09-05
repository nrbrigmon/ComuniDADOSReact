import React, { Component } from "react";

import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import headerStyle from "../../styles/HeaderStyle";
import HeaderLinks from "./HeaderLinks";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false
    };
    this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
  }
  handleDrawerToggle() {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              COMUNIDADOS
            </Typography>
            {/* <Button color="inherit">Login</Button> */}
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              className={classes.menuButton}
              onClick={this.handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>

          <Drawer
            anchor="right"
            open={this.state.mobileOpen}
            onClose={this.handleDrawerToggle}
          >
            <HeaderLinks />
          </Drawer>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(headerStyle)(Header);
