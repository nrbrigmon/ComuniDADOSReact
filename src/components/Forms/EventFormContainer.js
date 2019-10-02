import React, { Component } from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import withStyles from "@material-ui/core/styles/withStyles";
import FormStyle from "components/Forms/FormStyle";
import { DialogContent, Button } from "@material-ui/core";

import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import EventFormContent from "./EventFormContent";

class EventForm extends Component {
  state = {
    open: false
  };

  _handleClickOpen = () => {
    this.setState({
      open: true
    });
  };

  _handleClose = () => {
    this.setState({
      open: false
    });
  };

  // _handleColorChange = (palette, row, action) => {
	// 	// console.log(row);
	// 	action(palette)
  //   // this.setState({
  //   //   open: false
  //   // });
  // };

  render() {
		// let { classes, action } = this.props;
    return (
      <div >

				<div >
					<Button 
						onClick={() => this._handleClickOpen()}
						variant="contained" 
						color="primary" >{"<Icon>"} Click here to add event</Button>
				</div>

				<Dialog 
					onClose={this._handleClose} 
					open={this.state.open} 
					maxWidth="lg" >
          <DialogTitle id="simple-dialog-title">
					
					<IconButton aria-label="close" onClick={this._handleClose}>
						<CloseIcon />
					</IconButton>
						Event Details
					</DialogTitle>

					<DialogContent dividers>
          	<EventFormContent {...this.props} />
					</DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(FormStyle)(EventForm);
