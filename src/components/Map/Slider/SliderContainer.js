import React, { Component} from 'react';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { POPOVER_TEXT } from "constants/forms";

import withStyles from "@material-ui/core/styles/withStyles";
import SliderTransparency from "./SliderTransparency"
import SliderContainerStyle from "./SliderContainerStyle";

import { connect } from "react-redux";
import * as actions from "actions";

class SliderContainer extends Component {

		render() {
				let { classes, preferredLanguage, popover, ...rest } = this.props;
				let popUpText = POPOVER_TEXT[preferredLanguage]['slider'];
				let popOverId = 'slider-popover'
				let openLogic = (popover.open && popover.anchor.id === popOverId)
				// console.log(openLogic)
				// console.log(this.props.mapLayers["metric"])
				// console.log(classes)
				return (
						<div className={classes.container}
							onMouseEnter={this.props.updatePopOver}
							onMouseLeave={this.props.updatePopOver}
							id={popOverId}
							>
								<Popover
										id="mouse-over-popover"
										className={classes.popover}
										classes={{ paper: classes.paper }}
										open={openLogic}
										anchorEl={popover.anchor}
										anchorOrigin={{
											vertical: 6,
											horizontal: 'center'
										}}
										transformOrigin={{
											vertical: 'top',
											horizontal: 'center',
										}}
										onClose={this.props.updatePopOver}
										disableRestoreFocus>
										<Typography className={classes.text}> { popUpText } </Typography>
								</Popover>
								
								<SliderTransparency {...rest } />

						</div>
				);
		}
}

function mapStateToProps(state) {
  return {
		mapLayers: state.mapLayers
		,userLocation: state.userLocation
		,preferredLanguage: state.preferredLanguage
		,popover: state.popover
  };
}

export default withStyles(SliderContainerStyle)(connect(mapStateToProps, actions)(SliderContainer));