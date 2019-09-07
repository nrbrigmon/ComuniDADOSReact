import React, { Component } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";

import Select from 'react-select';

import * as _metrics from "constants/metrics";

class MetricAppBarGeography extends Component {

	_makeGeographySelection = (e) => {
		//the first action will update the app bar display
		this.props.selectMetricLayer(e.target.value);
		//the second action will update the map layer
		this.props.fetchMapLayer(e.target.value);
	}
  render() {
		const { classes } = this.props;
		// console.log(this.props)
    return (
				<FormControl className={classes.formControl}>
					<Select
						placeholder={"Select a Geography"}
						value={this.props.metricSelection}
						onChange={this._makeGeographySelection}
						className={classes.display}
					>
						<MenuItem value="" disabled>
							Select a Geography
						</MenuItem>
						{ _metrics.geography_options.map( (elem, idx) => {
								return (
									<MenuItem key={idx} value={elem.file_name} > {elem.display_name }</MenuItem>
								)
							})
						}
					</Select>
				</FormControl>
    );
  }
}

export default MetricAppBarGeography;
