import React, { Component } from "react";
import Slider from '@material-ui/core/Slider';

// import Popover from '@material-ui/core/Popover';
import withStyles from "@material-ui/core/styles/withStyles";
import SliderStyle from "components/Map/SliderStyle";

const containerCSS = { 
	position: "absolute"
	,top: "172px"
	,right: "20px"
	,zIndex: "500"
	,width: "110px"
};

class LeafletMapSlider extends Component {

	_onSliderUpdate(obj, evt, updateOpacity){
		
		let adjusted_variable = ( Number(evt) / 100 ).toFixed(1)
		updateOpacity(adjusted_variable)
	}

	render(){
		let { classes, action, baseMapOpacity } = this.props
		let adjusted_opacity = ( Number(baseMapOpacity) * 100 )
		// console.log(adjusted_opacity)
		return (
		<div style={containerCSS}>
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

			{/* 
			  const classes = useStyles();
				const [anchorEl, setAnchorEl] = React.useState(null);

				function handlePopoverOpen(event) {
					setAnchorEl(event.currentTarget);
				}

				function handlePopoverClose() {
					setAnchorEl(null);
				}

				const open = Boolean(anchorEl);
			
			<Popover
        id="mouse-over-popover"
        className={classes.popover}
        classes={{
          paper: classes.paper,
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
				( preferredLanguage === 'en' ? <Typography>Adjust Map Opacity</Typography> :
					<Typography>Ajustar a Opacidade do Mapa</Typography> )
      </Popover> */}
		</div>)
	}
}

export default withStyles(SliderStyle)(LeafletMapSlider);