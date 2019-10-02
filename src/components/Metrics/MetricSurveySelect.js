import React, { Component } from "react";
import Select from 'react-select';
import { components } from "./MetricFunctions";

import MetricStyle from "components/Metrics/MetricStyle";
import withStyles from "@material-ui/core/styles/withStyles";

/* *TODO

1. set up API to fetch responses 
2. load responses into state

*/
const english_options = [
	{value: "metric_a"
	,label: "Metric A"},
	{value: "metric_b"
	,label: "Metric B"},
	{value: "metric_c"
	,label: "Metric C"}
]

const port_options = [
	{value: "metric_a"
	,label: "Métrica A"},
	{value: "metric_b"
	,label: "Métrica B"},
	{value: "metric_c"
	,label: "Métrica C"}
]

class MetricSurveySelect extends Component {

	_makeMetricSelection = (e) => {
		console.log(e)
	}

  render() {
		let { classes,  preferredLanguage } = this.props;
		let placeHolder = 'Select a Metric'

    return ( 
				<div>
					<Select
						className={classes.formControl}
						classes={classes}
						placeholder={placeHolder}
						options={preferredLanguage === 'en' ? english_options: port_options }
						components={components}
						value={"Metric A"}
						onChange={this._makeMetricSelection}
						/>
				</div>
    );
  }
}

export default withStyles(MetricStyle)(MetricSurveySelect);
