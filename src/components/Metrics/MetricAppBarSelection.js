import React, { Component } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import * as _metrics from "constants/metrics";

class MetricAppBarSelection extends Component {
	
	_makeMetricSelection = (e) => {
		//if there is a map layer available, run functions
		if (this.props.mapLayers){
			//grab object by key-value
			let metricObj = _metrics.district_metrics.filter( elem => {
				return elem.label === e.target.value
			})
			this.props.updateLayerStyles(metricObj);

		}
	}

  render() {
    const { classes } = this.props;
    return (
				<FormControl className={classes.formControl}>
					<Select
						displayEmpty
						value={""}
						onChange={this._makeMetricSelection}
					>
						<MenuItem value="" disabled>
							Select a Metric
						</MenuItem>
						{ _metrics.district_metrics.map( (elem, idx) => {
								return (
									<MenuItem key={idx} value={elem.label} data={elem}> {elem.alias_name }</MenuItem>
								)
							})
						}
						
					</Select>
				</FormControl>
    );
  }
}

export default MetricAppBarSelection;
