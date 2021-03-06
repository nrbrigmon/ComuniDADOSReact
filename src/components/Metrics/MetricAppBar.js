import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MetricAppBarGeography from 'components/Metrics/MetricAppBarGeography';
import MetricReactSelect from 'components/Metrics/MetricReactSelect';

import MetricStyle from "components/Metrics/MetricStyle";
import withStyles from "@material-ui/core/styles/withStyles";
import { connect } from "react-redux";
import * as actions from "actions";


class MetricAppBar extends Component {
  render() {
		const { classes } = this.props;
		// console.log(this.props)
    return (
      <div>
        <AppBar position="static" className={classes.root}>
          <Toolbar variant="dense">
            <Grid item xs={12}>
              <Grid container justify="center">
                {/* First item is for choosing geography */}
								<MetricAppBarGeography {...this.props} />

                {/* Second item is for choosing a metric */}
								<MetricReactSelect {...this.props} />
                {/* <MetricAppBarSelection {...this.props} /> */} 

              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
		mapLayers: state.mapLayers,
		preferredLanguage: state.preferredLanguage
  };
}

export default withStyles(MetricStyle)(connect(mapStateToProps, actions)(MetricAppBar));
