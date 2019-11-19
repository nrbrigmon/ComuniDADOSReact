import React, { Component} from 'react';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import withStyles from "@material-ui/core/styles/withStyles";
import ToggleStyle from "components/Map/BaseMapToggle/ToggleStyle";
import LayersIcon from '@material-ui/icons/Layers';
import { POPOVER_TEXT } from "constants/forms";

import { connect } from "react-redux";
import * as actions from "actions";

class BaseMapToggle extends Component {

		_handleMouseClick = (baseMapSelection) => {
			//we only have 3 base maps so the toggle will select numbers 0, 1, 2
			baseMapSelection = (baseMapSelection+1) % 3;
			// console.log(baseMapSelection)
			this.props.updateBaseLayer(baseMapSelection)
		}

		render() {
				let { classes, preferredLanguage, mapLayers, popover } = this.props;
				let { baseMapSelection } = mapLayers;
				let popUpText = POPOVER_TEXT[preferredLanguage]['baseMap'];let popOverId = 'slider-basemap';
				let openLogic = (popover.open && popover.anchor.id === popOverId)
				return (
						<Paper className={classes.container}
						onMouseEnter={this.props.updatePopOver}
						onMouseLeave={this.props.updatePopOver}
						id={popOverId}
						onClick={() => this._handleMouseClick(baseMapSelection)}
						>
								<Typography
										className={classes.interior} 
										>
										<LayersIcon  fontSize="large"/>
								</Typography>
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
						</Paper>
				);
		}
}

function mapStateToProps(state) {
  return {
		mapLayers: state.mapLayers
		,userLocation: state.userLocation
		,popover: state.popover
		,preferredLanguage: state.preferredLanguage
  };
}

export default withStyles(ToggleStyle)(connect(mapStateToProps, actions)(BaseMapToggle));