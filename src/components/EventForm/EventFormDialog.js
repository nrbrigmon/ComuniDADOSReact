import React, { Component } from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import { DialogContent, Button } from "@material-ui/core";
import RoomIcon from '@material-ui/icons/Room';
import Popover from '@material-ui/core/Popover';
import Typography from "@material-ui/core/Typography";
import { EVENT_FORM_CONTENTS, BUTTON_ACTIONS, POPOVER_TEXT } from "constants/forms";

import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import EventFormContent from "./EventFormContent";

// import Popover from '@material-ui/core/Popover';
// import { POPOVER_TEXT } from "constants/forms";

class EventFormDialog extends Component {
  state = {
		open: false
	};
	
  _handleClickOpen = () => {
		//get user location if not already available
		if (this.props.userLocation.show === false){
			this.props.addUserLocation()
		}
		//open window
    this.setState({ open: true});
  };

  _handleClose = () => {
    this.setState({ open: false });
  };

	
  render() {
		// console.log(this.props)
		let { classes, preferredLanguage, userInfo, popover } = this.props;
		let loggedIn = ( userInfo.token.length >= 3 ? true : false);
		let popOverId = 'slider-postEvent'
		let openLogic = (popover.open && popover.anchor.id === popOverId && !loggedIn)
		let popUpText = POPOVER_TEXT[preferredLanguage]['postEvent'];
		
    return (
      <div >

				<div 
					onMouseEnter={this.props.updatePopOver}
					onMouseLeave={this.props.updatePopOver}
					id={popOverId}
					className={classes.postEvent}
					>
					<Button 
						onClick={() => this._handleClickOpen()}
						variant="contained" 
						size='medium'
						disabled={ !loggedIn }
						color="primary" ><RoomIcon size='sm' /> {BUTTON_ACTIONS[preferredLanguage]['postEvent']}</Button>

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
				</div>

				<Dialog 
					fullWidth={true}
					onClose={this._handleClose} 
					open={this.state.open} 
					maxWidth={false} >
          
					<DialogTitle id="simple-dialog-title" className={classes.formTitle}>	
						
						{ EVENT_FORM_CONTENTS[preferredLanguage]['title'] }
						
						<IconButton aria-label="close" onClick={this._handleClose} className={classes.iconExit}>
							<CloseIcon />
						</IconButton>
					</DialogTitle>
					
					<DialogContent dividers>
						
          	<EventFormContent {...this.props} closePopUp={this._handleClose} />

					</DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default EventFormDialog;
