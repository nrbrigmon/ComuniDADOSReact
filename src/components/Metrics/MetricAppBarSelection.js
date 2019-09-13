import React, { Component } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import { district_metrics } from "constants/metrics";

class MetricAppBarSelection extends Component {
	
	_makeMetricSelection = (e) => {
		//if there is a map layer available, run functions
		// if (this.props.mapLayers){
			//grab object by key-value
			let metricObj = district_metrics.filter( elem => {
				return elem.label === e.target.value
			})
			// console.log(metricObj[0])
			this.props.updateLayerStyle(metricObj[0]);
		// }
	}

  render() {
		let { classes, mapLayers } = this.props;
		// console.log(mapLayers.metric)
		let metricSelection = (mapLayers.metric === "" ? "" : mapLayers.metric.label);
    return (
				<FormControl className={classes.formControl}>
					<Select
						displayEmpty
						value={metricSelection}
						onChange={this._makeMetricSelection}
					>
						<MenuItem value="" disabled>
							Select a Metric
						</MenuItem>
						{ district_metrics.map( (elem, idx) => {
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
