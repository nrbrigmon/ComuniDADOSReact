import React, { Component } from 'react';
import Select from 'react-select';
import { components } from "./MetricFunctions";
import { district_metrics, blocks_metrics } from "constants/metrics";

class MetricReactSelect extends Component {

	_makeMetricSelection = (layer, e) => {
		let { type } = layer;
		let metricObj = {};
		if (type === 'districts'){
			//if we have the district shape, we use that data
			metricObj = district_metrics.filter( elem => {
				return elem.value === e.value
			});
		} else {
			//else we use the block data
			metricObj = blocks_metrics.filter( elem => {
				return elem.value === e.value
			});
		}
		
		// console.log(metricObj[0])
		this.props.updateLayerStyle(metricObj[0]);
}


	render(){
		
		let { classes, mapLayers } = this.props;
		let metricSelection = (mapLayers.metric === "" ? "" : mapLayers.metric.label);
		let placeHolder = (mapLayers.metric === "" ? "Select a Metric" : metricSelection);
    // console.log(metricSelection)
		
		return (
			<div className={classes.root}>
					<Select
						className={classes.formControl}
						classes={classes}
						placeholder={placeHolder}
						options={district_metrics}
						components={components}
						value={metricSelection}
						onChange={(e) => this._makeMetricSelection(mapLayers, e)}
						/>
			</div>
  	);
	}
}

export default MetricReactSelect;