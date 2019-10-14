import React, { Component } from 'react'
// import Button from "@material-ui/core/Button"
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import withStyles from "@material-ui/core/styles/withStyles";
import MyLocationIcon from '@material-ui/icons/MyLocation';
import FindMeStyle from "components/Map/FindMe/FindMeStyle";

class FindMeButton extends Component {
		state = {
			open: false,
			anchorEl: null
		}

		_handleMouseClick = (action) => {
			//this will trigger action attached to this component
			action(true)
		}

		_handlePopoverOpen = (event) => {

				this.setState({ 
					anchorEl: event.currentTarget, 
					open: true 
				});
				// setTimeout(function(){
				// 	debugger;
				// }, 2000);
		}

		_handlePopoverClose = () => {
				this.setState({ 
					anchorEl: null, 
					open: false  
				});
		}


	render(){
		let { classes, preferredLanguage, action } = this.props;
		let popUpText = ( preferredLanguage === 'en' ? "Show Your Location" : "Mostre sua Localização" )
		return(
			<Paper className={classes.container}
			onMouseEnter={this._handlePopoverOpen}
			onMouseLeave={this._handlePopoverClose}
			onClick={() => this._handleMouseClick(action)}
			>
				<Typography
					className={classes.interior} 
					>
					<MyLocationIcon  fontSize="small"/>
				</Typography>
				<Popover
						id="mouse-over-popover"
						className={classes.popover}
						classes={{
							paper: classes.paper,
						}}
						open={this.state.open}
						anchorEl={this.state.anchorEl}
						anchorOrigin={{
							vertical: 0,
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
			</Paper>
		)
	}
}

export default withStyles(FindMeStyle)(FindMeButton);