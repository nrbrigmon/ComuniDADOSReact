import React, { Component } from "react";
import Select from 'react-select';
import { components } from "./MetricFunctions";
import { geography_options } from "constants/metrics";

class MetricAppBarGeography extends Component {

	_makeGeographySelection = (e) => {
		//the first action will update the app bar display
		this.props.updateLayerType(e.value);
		if (this.props.mapLayers.type !== e.value){
			//the second action will update the map layer
			this.props.fetchMapLayerById("sao",e.value);
			this.props.fetchMapLayerById("helio",e.value);
		}
	}

  render() {
		const { classes, mapLayers } = this.props;
		let placeHolder = ( mapLayers.type === "districts" ? "Districts" : "Blocks" );
    return ( 
			<div className={classes.root}>
				<div className={classes.root}>
					<Select
						className={classes.formControl}
						classes={classes}
						placeholder={placeHolder}
						options={geography_options}
						components={components}
						value={this.props.mapLayers.type}
						onChange={this._makeGeographySelection}
						/>
			</div>
{/* 
					<Select
						// displayEmpty
						className={classes.formControl}
						variant="filled"
						value={this.props.mapLayers.type}
						onChange={this._makeGeographySelection}
						
					>

						<MenuItem value="" disabled>		
							Select Geography Type
						</MenuItem>
						{ geography_options.map( (elem, idx) => {
								return (
									<MenuItem key={idx} value={elem.value} > {elem.label }</MenuItem>
								)
							})
						}
						</Select> */}
						{/* <FormHelperText>Select Geography</FormHelperText> */}
				</div>
    );
  }
}

export default MetricAppBarGeography;
