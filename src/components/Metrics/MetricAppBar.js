import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import withStyles from "@material-ui/core/styles/withStyles";
import Toolbar from "@material-ui/core/Toolbar";
import metricStyles from "../../styles/MetricAppBarStyle";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

class MetricAppBar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <AppBar position="static" className={classes.root}>
          <Toolbar variant="dense">
            <Grid item xs={12}>
              <Grid container justify="center">
                {/* First item is for choosing geography */}
                <FormControl className={classes.formControl}>
                  <Select
                    displayEmpty
                    value={""}
                    inputProps={{
                      name: "age",
                      id: "demo-controlled-open-select"
                    }}
                  >
                    <MenuItem value="" disabled>
                      Select a Geography
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
                {/* Second item is for choosing a metric */}
                <FormControl className={classes.formControl}>
                  <Select
                    displayEmpty
                    value={""}
                    inputProps={{
                      name: "age",
                      id: "demo-controlled-open-select"
                    }}
                  >
                    <MenuItem value="" disabled>
                      Select a Metric
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(metricStyles)(MetricAppBar);
