import React, { Component } from 'react'
// import Button from "@material-ui/core/Button"
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import withStyles from "@material-ui/core/styles/withStyles";
import MyLocationIcon from '@material-ui/icons/MyLocation';
import FindMeStyle from "components/FindMeButton/FindMeStyle";
import { POPOVER_TEXT } from "constants/forms";

import { connect } from "react-redux";
import * as actions from "actions";

class FindMeButton extends Component {

		_handleMouseClick = (show) => {
			//if user is hidden, we add it
			if (show === false){
				///get the user location
				this.props.addUserLocation(true)
			} else {
				//if user is showing, we remove it
				this.props.addUserLocation(false)
			}
		}

	render(){
		let { classes, preferredLanguage, userLocation, popover } = this.props;
		let popUpText = POPOVER_TEXT[preferredLanguage]['findMe'];
		let popOverId = 'slider-findme'
		let openLogic = (popover.open && popover.anchor.id === popOverId)
		
		// console.log(this.props)
		return(
			<Paper 
				className={classes.container}
				onMouseEnter={this.props.updatePopOver}
				onMouseLeave={this.props.updatePopOver}
				id={popOverId}
				onClick={() => this._handleMouseClick(userLocation.show)}
				style={userLocation.show ? { background: '#b0b7dd' } : {} }
			>
				<Typography className={classes.interior}  >
					<MyLocationIcon  fontSize="small"/>
				</Typography>
				<Popover
						id="mouse-over-popover"
						className={classes.popover}
						classes={{ paper: classes.paper }}
						open={openLogic}
						anchorEl={popover.anchor}
						anchorOrigin={{
							vertical: 0,
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
		)
	}
}

function mapStateToProps(state) {
  return {
		preferredLanguage: state.preferredLanguage
		,popover: state.popover
		,userLocation: state.userLocation
  };
}

export default withStyles(FindMeStyle)(connect(
  mapStateToProps,
	actions
)(FindMeButton));