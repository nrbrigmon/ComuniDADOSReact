import React, { Component } from "react";
import Slider from '@material-ui/core/Slider';

// import Popover from '@material-ui/core/Popover';
import withStyles from "@material-ui/core/styles/withStyles";
import SliderTransparencyStyle from "./SliderTransparencyStyle";


class SliderTransparency extends Component {

	_onSliderUpdate(obj, evt){
		let adjusted_variable = ( Number(evt) / 100 ).toFixed(1)
		this.props.updateLayerOpacity(adjusted_variable)
	}

	render(){
		let { classes, mapLayers } = this.props
		let adjusted_opacity = ( Number(mapLayers.baseMapOpacity) * 100 )
		// console.log(adjusted_opacity)
		return (
		<div >
      <Slider
				classes={classes}
        defaultValue={adjusted_opacity}
				valueLabelDisplay="auto"
        step={10}
        // marks
        min={0}
				max={100}
				onChange={(obj, evt) => this._onSliderUpdate(obj, evt)}
      />

		</div>)
	}
}

export default withStyles(SliderTransparencyStyle)(SliderTransparency);