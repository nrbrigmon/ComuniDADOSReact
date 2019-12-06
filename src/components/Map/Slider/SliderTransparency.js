import React, { Component } from "react";
import Slider from '@material-ui/core/Slider';

// import Popover from '@material-ui/core/Popover';
import withStyles from "@material-ui/core/styles/withStyles";
import SliderStyle from "./SliderStyle";


class SliderTransparency extends Component {

	_onSliderUpdate(obj, evt, updateOpacity){
		let adjusted_variable = ( Number(evt) / 100 ).toFixed(1)
		updateOpacity(adjusted_variable)
	}

	render(){
		let { classes, action, baseMapOpacity } = this.props
		let adjusted_opacity = ( Number(baseMapOpacity) * 100 )
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
				onChange={(obj, evt) => this._onSliderUpdate(obj, evt, action)}
      />

		</div>)
	}
}

export default withStyles(SliderStyle)(SliderTransparency);