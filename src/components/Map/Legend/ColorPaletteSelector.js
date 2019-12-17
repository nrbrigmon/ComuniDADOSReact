import React, { Component } from "react";
import Colors from "nice-color-palettes";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import withStyles from "@material-ui/core/styles/withStyles";
import ColorPaletteStyle from "./ColorPaletteStyle";
import { Typography, DialogContent } from "@material-ui/core";

import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { COLOR_PALETTE } from "constants/forms"

class ColorPaletteSelector extends Component {
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

  _handleColorChange = (palette, row, action) => {
		// console.log(row);
		action(palette)
    // this.setState({
    //   open: false
    // });
  };

  render() {
    let { classes, preferredLanguage, action } = this.props;
    // console.log(this.props)
    return (
      <div >

				<div className={classes.clickMeContainer}>
					<Typography 
						variant="caption" 
						gutterBottom
						className={classes.clickMe} 
						onClick={() => this._handleClickOpen()}>
						{ COLOR_PALETTE[preferredLanguage]["change"] }
					</Typography>
				</div>

				<Dialog 
					onClose={this._handleClose} 
					open={this.state.open} 
					maxWidth="md" >
          <DialogTitle id="simple-dialog-title">
					
					<IconButton aria-label="close" className={classes.closeButton} onClick={this._handleClose}>
						<CloseIcon />
					</IconButton>
						{ COLOR_PALETTE[preferredLanguage]["instruction"] }
					</DialogTitle>

					<DialogContent dividers>
            <List dense className={classes.myList}>
              {Colors.map((palette, row) => {
                let arrayOfColor = (
                  <span>
										{
											palette.map( (color, idx) => {
												return (<span key={idx} className={classes.quartile} style={{ background: color }} />)
											})
										}
									</span>
                );

                return (
                  <ListItem
                    button
                    onClick={() => this._handleColorChange(palette, row, action)}
                    key={row}
                  >
                    <ListItemText primary={arrayOfColor} />
                  </ListItem>
                );
              })}
            </List>
						</DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(ColorPaletteStyle)(ColorPaletteSelector);
