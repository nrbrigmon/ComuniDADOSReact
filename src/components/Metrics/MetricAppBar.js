import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MetricAppBarSelection from 'components/Metrics/MetricAppBarSelection';
import MetricAppBarGeography from 'components/Metrics/MetricAppBarGeography';

class MetricAppBar extends Component {
  render() {
		const { classes } = this.props;
		// console.log(classes)
    return (
      <div>
        <AppBar position="static" className={classes.root}>
          <Toolbar variant="dense">
            <Grid item xs={12}>
              <Grid container justify="center">
                {/* First item is for choosing geography */}
								<MetricAppBarGeography {...this.props} />

                {/* Second item is for choosing a metric */}
                <MetricAppBarSelection {...this.props} />
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default MetricAppBar;
