import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import MetricStyle from "components/Metrics/MetricStyle";
import withStyles from "@material-ui/core/styles/withStyles";

class MetricAppBar extends Component {
  render() {
		const { children, classes } = this.props;
		// console.log(this.props)
    return (
      <div>
        <AppBar position="static" className={classes.container}>
          <Toolbar variant="dense" className={classes.container2}>
            <Grid item xs={12}>
              {children}
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}


export default withStyles(MetricStyle)(MetricAppBar);
