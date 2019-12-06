import React, { Component } from "react";
import Select from 'react-select';
import { components } from "./MetricFunctions";
import { geography_options } from "constants/metrics";

class MetricAppBarGeography extends Component {

	_makeGeographySelection = (e) => {
		// console.log(this.props)
		// console.log(e)
		//the first action will update the app bar display
		this.props.updateLayerType(e.value);
		if (this.props.mapLayers.type !== e.value){
			//the second action will update the map layer
			this.props.fetchMapLayerById("sao", e.value);
			this.props.fetchMapLayerById("helio", e.value);
		}
	}

  render() {
		let { classes, mapLayers, preferredLanguage } = this.props;
		let placeHolder = ( mapLayers.type === "districts" ? "Districts" : "Blocks" );
		let geography_options_pr;
		//section to make label changes based on language update
		if (preferredLanguage === 'pr'){
			// console.log("PR!")
			geography_options_pr = geography_options.map( elem => {
				return {
					label: elem.labelPR,
					value: elem.value
				}
			});
			// console.log(temp_options)
			placeHolder = ( mapLayers.type === "districts" ? "Distritos" : "Blocos" );
		}
		

    return ( 
				<div className={classes.root}>
					<Select
						className={classes.formControl}
						classes={classes}
						placeholder={placeHolder}
						options={preferredLanguage === 'en' ? geography_options : geography_options_pr}
						components={components}
						value={this.props.mapLayers.type}
						onChange={this._makeGeographySelection}
						/>
				</div>
    );
  }
}

export default MetricAppBarGeography;
