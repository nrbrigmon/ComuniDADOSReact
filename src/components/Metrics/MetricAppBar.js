import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

class MetricAppBar extends Component {
  render() {
		const { children } = this.props;
		// console.log(this.props)
    return (
      <div>
        <AppBar position="static" style={{background:"black"}}>
          <Toolbar variant="dense">
            <Grid item xs={12}>
              {children}
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}


export default MetricAppBar;
