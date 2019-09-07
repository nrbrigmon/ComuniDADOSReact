import React, { Component } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import * as _metrics from "constants/metrics";

class MetricAppBarSelection extends Component {
	
	_makeMetricSelection = (e) => {
		console.log(e.target);
		// this.props.selectMetricLayer(e.target.value);
		// this.props.fetchMapLayer(e.target.value);
	}

  render() {
    const { classes } = this.props;
    return (
				<FormControl className={classes.formControl}>
					<Select
						displayEmpty
						value={""}
						onChange={this.props._makeMetricSelection}
					>
						<MenuItem value="" disabled>
							Select a Metric
						</MenuItem>
						{ _metrics.district_metrics.map( (elem, idx) => {
								return (
									<MenuItem key={idx} value={elem.label} > {elem.alias_name }</MenuItem>
								)
							})
						}
						
					</Select>
				</FormControl>
    );
  }
}

export default MetricAppBarSelection;
