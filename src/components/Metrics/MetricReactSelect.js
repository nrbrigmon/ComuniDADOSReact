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
		let { classes, mapLayers, preferredLanguage } = this.props;
		let metricSelection = (mapLayers.metric === "" ? "" : mapLayers.metric.label);
		// console.log(mapLayers)
		let placeHolder = (mapLayers.metric.value === "" ? "Select a Metric" : metricSelection);
		let district_metrics_pr;
		
		//section to make metric changes based on language update
		if (preferredLanguage === 'pr'){
			// console.log("PR!")
			district_metrics_pr = district_metrics.map( elem => {
				return {
					label: (elem.labelPR === undefined ? "" : elem.labelPR),
					value: elem.value,
					category: elem.category,
					palette: elem.palette,
					max: elem.max,
					min: elem.min,
					breaks: elem.breaks,
					legend: elem.legend
				}
			});
			// console.log(temp_options)
			placeHolder = (mapLayers.metric.value === "" ? "Selecione uma Métrica" : metricSelection);
		}
		// console.log(placeHolder)
		// console.log(preferredLanguage)
		return (
			<div className={classes.root}>
					<Select
						className={classes.formControl}
						classes={classes}
						placeholder={placeHolder}
						options={preferredLanguage === 'en' ? district_metrics : district_metrics_pr}
						components={components}
						value={metricSelection}
						onChange={(e) => this._makeMetricSelection(mapLayers, e)}
						/>
			</div>
  	);
	}
}

export default MetricReactSelect;