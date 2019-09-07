import React, { Component } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import * as _metrics from "constants/metrics";


class MetricAppBarGeography extends Component {

	_makeGeographySelection = (e) => {
		console.log(e)
		//the first action will update the app bar display
		this.props.selectMetricLayer(e.target.value);
		//the second action will update the map layer
		this.props.fetchMapLayer(e.target.value);
	}
  render() {
		const { classes } = this.props;
		// console.log(_metrics.geography_options)
    return ( 
			<FormControl className={classes.formControl}>
					<Select
						displayEmpty
						value={""}
						onChange={this._makeGeographySelection}
					>
						<MenuItem value="" disabled>
							Select Geography
						</MenuItem>
						{ _metrics.geography_options.map( (elem, idx) => {
								return (
									<MenuItem key={idx} value={elem.value} > {elem.label }</MenuItem>
								)
							})
						}
						</Select>
				</FormControl>
    );
  }
}

export default MetricAppBarGeography;
