import React, { Component } from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import withStyles from "@material-ui/core/styles/withStyles";
import FormStyle from "components/Forms/FormStyle";
import { DialogContent, Button } from "@material-ui/core";
import RoomIcon from '@material-ui/icons/Room';


import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import EventFormContent from "./EventFormContent";

class EventForm extends Component {
  state = {
		open: false
		
  };

  _handleClickOpen = () => {
		console.log(this.props)
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

	/**
	 * When user clicks POST EVENT:
	 * 1. Ask user for location
	 * 	- update map
	 *  - if user denies, offer chance to try again
	 *  - or offer ability to search and select location
	 *  - display reletaive address based on geocoder 
	 * 2. fill out form save in local state
	 * 3. enable post and get requests for events
	 * 4. enable user to move marker and for the marker coordinates to update
	 * 
	 */

  render() {
		// console.log(this.props)
		let { classes } = this.props;
    return (
      <div >

				<div className={classes.postEvent}>
					<Button 
						onClick={() => this._handleClickOpen()}
						variant="contained" 
						size='medium'
						color="primary" ><RoomIcon size='sm' /> Post Event</Button>
				</div>

				<Dialog 
					onClose={this._handleClose} 
					open={this.state.open} 
					maxWidth="lg" >
          <DialogTitle id="simple-dialog-title" className={classes.formTitle}>	
							Event Details
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

export default withStyles(FormStyle)(EventForm);
