import React, { Component} from 'react';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';

import withStyles from "@material-ui/core/styles/withStyles";
import SliderTransparency from "./SliderTransparency"
import SliderContainerStyle from "./SliderContainerStyle";


class SliderContainer extends Component {
		state = {
			open: false,
			anchorEl: null
		}

		_handlePopoverOpen = (event) => {
			// console.log("in")
				this.setState({ 
					anchorEl: event.currentTarget, 
					open: true 
				});
				// setTimeout(function(){ debugger}, 2000);
		}

		_handlePopoverClose = () => {
			// console.log("out")
				this.setState({ 
					anchorEl: null, 
					open: false  
				});
		}

		render() {
				let { classes, preferredLanguage, baseMapOpacity, action } = this.props;
				let popUpText = ( preferredLanguage === 'en' ? "Base Map Transparency" : "Transparência do Mapa Base" )
				// console.log(this.props.mapLayers["metric"])
				// console.log(classes)
				return (
						<div className={classes.container}
							onMouseEnter={this._handlePopoverOpen}
							onMouseLeave={this._handlePopoverClose}
							>
								<Popover
										id="mouse-over-popover"
										className={classes.popover}
										classes={{
											paper: classes.paper,
										}}
										open={this.state.open}
										anchorEl={this.state.anchorEl}
										anchorOrigin={{
											vertical: 6,
											horizontal: 'center'
										}}
										transformOrigin={{
											vertical: 'top',
											horizontal: 'center',
										}}
										onClose={this._handlePopoverClose}
										disableRestoreFocus>
										<Typography className={classes.text}> { popUpText } </Typography>
								</Popover>
								
						<SliderTransparency 
								preferredLanguage={preferredLanguage} 
								action={action} 
								baseMapOpacity={baseMapOpacity} />

						</div>
				);
		}
}
export default withStyles(SliderContainerStyle)(SliderContainer);