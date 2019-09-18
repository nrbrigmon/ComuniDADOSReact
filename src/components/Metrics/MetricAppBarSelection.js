import React, { Component } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import { district_metrics, blocks_metrics } from "constants/metrics";

class MetricAppBarSelection extends Component {
	
	_makeMetricSelection = (layer, e) => {
			let { type } = layer;
			let metricObj = {};
			if (type === 'districts'){
				//if we have the district shape, we use that data
				metricObj = district_metrics.filter( elem => {
					return elem.label === e.target.value
				});
			} else {
				//else we use the block data
				metricObj = blocks_metrics.filter( elem => {
					return elem.label === e.target.value
				});
			}
			// console.log(metricObj[0])
			this.props.updateLayerStyle(metricObj[0]);
		// }
	}

  render() {
		let { classes, mapLayers } = this.props;
		// console.log(mapLayers.metric)
		let metricSelection = (mapLayers.metric === "" ? "" : mapLayers.metric.label);
    console.log(metricSelection)

    return (
				<FormControl className={classes.formControl}>
					<Select
						displayEmpty
						variant="filled"
						value={metricSelection}
						onChange={(e) => this._makeMetricSelection(mapLayers, e)}
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
