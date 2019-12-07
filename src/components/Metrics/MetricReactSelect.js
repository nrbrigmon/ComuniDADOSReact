import React, { Component } from 'react';
import Select from 'react-select';
import { components } from "./MetricFunctions";
import { district_metrics, blocks_metrics } from "constants/metrics";

import MetricStyle from "components/Metrics/MetricStyle";
import withStyles from "@material-ui/core/styles/withStyles";

import * as _util from "utils/mapping_utils";

class MetricReactSelect extends Component {

	_makeMetricSelection = (layer, e) => {
		this.props.updateLayerStyle(e);
	}

	//need a method for translating existing content on page...

	render(){
		let { classes, mapLayers, preferredLanguage } = this.props;
		
		let metricSelection = mapLayers.metric.label;
		let placeHolder, metrics_in_english, metrics_in_portuguese;
		// console.log(this.props)
		//section to make metric changes based on language update
		if (preferredLanguage === 'pr'){
			// console.log("PR!")
			metrics_in_portuguese = (mapLayers.type === 'districts' ? _util.adjustLabelsForPR(district_metrics) : _util.adjustLabelsForPR(blocks_metrics) );
			// console.log(temp_options)
			placeHolder = (mapLayers.metric.label === "" ? "Selecione uma Métrica" : metricSelection);
		} else {
			placeHolder = (mapLayers.metric.label === "" ? "Select a Metric" : metricSelection);
			metrics_in_english = (mapLayers.type === 'districts' ? district_metrics : blocks_metrics)
		}
		return (
			<div>
					<Select
						className={classes.formControl}
						classes={classes}
						placeholder={placeHolder}
						options={preferredLanguage === 'en' ? metrics_in_english : metrics_in_portuguese}
						components={components}
						value={metricSelection}
						onChange={(e) => this._makeMetricSelection(mapLayers, e)}
						/>
			</div>
  	);
	}
}

export default withStyles(MetricStyle)(MetricReactSelect);