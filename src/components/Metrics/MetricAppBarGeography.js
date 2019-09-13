import React, { Component } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
// import FormHelperText from '@material-ui/core/FormHelperText';
import Select from "@material-ui/core/Select";

import { geography_options } from "constants/metrics";


class MetricAppBarGeography extends Component {

	_makeGeographySelection = (e) => {
		//the first action will update the app bar display
		this.props.updateLayerType(e.target.value);
		if (this.props.mapLayers.type !== e.target.value){
			//the second action will update the map layer
			this.props.fetchMapLayerById("sao",e.target.value);
			this.props.fetchMapLayerById("helio",e.target.value);
		}
	}
  render() {
		const { classes } = this.props;
		// console.log(geography_options)
		// console.log(this.props)
    return ( 
			<FormControl className={classes.formControl}>
					<Select
						// displayEmpty
						value={this.props.mapLayers.type}
						onChange={this._makeGeographySelection}
					>

						{ geography_options.map( (elem, idx) => {
								return (
									<MenuItem key={idx} value={elem.value} > {elem.label }</MenuItem>
								)
							})
						}
						</Select>
						{/* <FormHelperText>Select Geography</FormHelperText> */}
				</FormControl>
    );
  }
}

export default MetricAppBarGeography;
