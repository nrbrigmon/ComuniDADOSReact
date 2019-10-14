import React, { Component } from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { EVENT_FORM_CONTENTS } from "constants/forms";

class EventFormContent extends Component {
	state = {
		eventName:'',
		eventCategory:'',
		eventDescription:'',
		createdBy:''
	}
	
	handleChange = (e) =>{
		// console.log(this.state)
		this.setState({
				[e.target.id]: e.target.value
			})
		localStorage.setItem('eventState', JSON.stringify({
			...this.state,
			[e.target.id]: e.target.value
		})) 
	}

	handleEventSubmit = (state, props) => {
		let newEvent = {
			eventId: props.randomId, 
			eventName: state.eventName,
			eventCategory: state.eventCategory,
			eventDescription: state.eventDescription,
			eventLatitude: props.userLocation.lat,
			eventLongitude: props.userLocation.long,
			createdBy: props.userInfo.username
		}
		console.log(newEvent)
		//send the object ot the database
		props.postNewEvent(newEvent) 
		//close this window
		props.closePopUp()
	}

	renderFormTable = (json, props) => {
		let { classes } = props;
		
		return (<Table>
			<TableHead>
					<TableRow>
						<TableCell className={classes.tableCell} >{json.header[0]}</TableCell>
						<TableCell className={classes.tableCell} >{json.header[1]}</TableCell>						
						</TableRow>
			</TableHead>
			<TableBody>
			{
				json.rows.map( ( elem, idx) => {
					return(
						<TableRow key={idx}>
						<TableCell className={classes.tableCell} > {elem.name }</TableCell>
						<TableCell className={classes.tableCell} > 
							<TextField
									id={elem.id}
									value={this.state[elem.id]}
									onChange={ e => this.handleChange(e)}
									margin="dense"
									padding="dense"
								/>
							</TableCell>
					</TableRow>
					)
				})
			}
			</TableBody>
		</Table>
		)
	
	}

  render() {
		let { classes, closePopUp } = this.props;
    return (<div>
			<p>Post event at your location? Or search for one?<br/> You are located at {'{location}'} </p>
			{ this.renderFormTable(EVENT_FORM_CONTENTS, this.props) }		

			<div className={classes.buttonGroup}>
				<Button 
					onClick={() => this.handleEventSubmit(this.state, this.props)}
					variant="contained" 
					className={classes.actionButton}
					color="secondary" >Submit</Button>
				<Button 
					onClick={() => closePopUp() }
					variant="contained" 
					className={classes.actionButton}
					color="default" 
					>Cancel</Button>
			</div>
		</div>)
		}
	}
export default EventFormContent;