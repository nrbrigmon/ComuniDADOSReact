import React, { Component } from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
// import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import { EVENT_FORM_CONTENTS, BUTTON_ACTIONS } from "constants/forms";
import { EVENT_CATEGORIES_EN,	EVENT_CATEGORIES_PR } from "constants/events";
import LeafletMapEventSelect from "components/Map/LeafletMapEventSelect";

/** next step is to import the select options for CATEGORY.
 * the step after that is to post to EVENT MARKER
 * the step after that is to view the events by query... need to cache data
 */
class EventFormContent extends Component {
	state = {
		eventName:'',
		eventCategory:'',
		eventDescription:'',
		createdBy:'',
		eventLat:0,
		eventLng:0
	}
	
	//if component mounts, we need to get the users location if possible, otherwise we have no coordinates
	componentDidMount(){
		if (this.props.userLocation.show === false){
			this.props.addUserLocation(true)
		}
	}
	handleChange = (e) =>{
		// console.log(e.target)
		console.log(this.state.eventLat)
		this.setState({
				[e.target.id]: e.target.value
			})
		localStorage.setItem('eventState', JSON.stringify({
			...this.state,
			[e.target.id]: e.target.value
		})) 
	}
	updateEventLocation = ({lat, lng}) => {
			this.setState({
				eventLat: lat,
				eventLng: lng
			})
		localStorage.setItem('eventState', JSON.stringify({
			...this.state,
			eventLat: lat,
			eventLng: lng
		})) 
		console.log(lat, lng)
	}
	handleEventSubmit = (state, props) => {
		console.log(state)
		let newEvent = {
			eventId: props.randomId, 
			eventName: state.eventName,
			eventCategory: state.eventCategory,
			eventDescription: state.eventDescription,
			eventLatitude: (state.eventLat === 0 ? props.userLocation.lat : state.eventLat),
			eventLongitude: (state.eventLng === 0 ? props.userLocation.long : state.eventLng),
			createdBy: props.userInfo.username
		}
		// console.log(newEvent)
		//send the object ot the database
		props.postNewEvent(newEvent) 
		//close this window
		props.closePopUp()
	}

	renderInputType = (elem, props) => {
		// console.log(t)
		let options = ( props.preferredLanguage === 'en' ? EVENT_CATEGORIES_EN : EVENT_CATEGORIES_PR )
		if (elem.type === 'dropdown'){
			return (
				<TextField
					id={elem.id}
					select
					className={props.classes.inputField}
					value={this.state[elem.id]}
					onChange={ e => {
						e = { ...e, target: { ...e.target, id: elem.id } } 
						// console.log(elem.id)
						this.handleChange(e)
					}}
					margin="dense"
					padding="dense"
					variant="outlined"
				>
					{
						options.map(item => (
							<MenuItem key={item.value} value={item.value} id={item.id}>
								{item.label}
							</MenuItem>
						)) 
					}
			</TextField>
		)
		} else{
		
			return (<TextField
							id={elem.id}
							className={props.classes.inputField}
							value={this.state[elem.id]}
							onChange={ e => this.handleChange(e)}
							margin="dense"
							padding="dense"
							variant="outlined"
							multiline={elem.type === "multiline"}
							rows={elem.type === "multiline" ? 4 : 1}
						/>)
		}
	}
	renderFormTable = (json, props) => {
		let { classes } = props;
		
		return (<Table>
			<TableBody>
			{
				json.rows.map( ( elem, idx) => {

					return(
						<TableRow key={idx}>
						<TableCell className={classes.tableCellDesc} > {elem.name }</TableCell>
						<TableCell className={classes.tableCell} > 
							{this.renderInputType(elem, props)}	
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
		let { classes, closePopUp, userLocation, preferredLanguage } = this.props;
		let eventCoords = []
		if (this.state.eventLat === 0){
			eventCoords = [userLocation.lat, userLocation.long]
		} else {
			eventCoords = [this.state.eventLat, this.state.eventLng]
		}
		// console.log(this.props)
    return (<div>
			<Grid container>
				<Grid item sm={6} xs={12} className={classes.formSection}> 
					{ this.renderFormTable(EVENT_FORM_CONTENTS[preferredLanguage], this.props) }		
				</Grid>
				<Grid item sm={6} xs={12} className={classes.formSection}> 
					<LeafletMapEventSelect {...this.props} eventCoords={eventCoords} updateEventLocation={this.updateEventLocation}/>					
				</Grid>
				<Grid item sm={12} xs={12} className={classes.buttonGroup}>
					<Button 
						disabled={this.props.userLocation.show === false} //disable submit if no user location available
						onClick={() => this.handleEventSubmit(this.state, this.props)}
						variant="contained" 
						className={classes.actionButton}
						color="secondary" >{BUTTON_ACTIONS[preferredLanguage]['submit']}</Button>
					<Button 
						onClick={() => closePopUp() }
						variant="contained" 
						className={classes.actionButton}
						color="default" 
						> {BUTTON_ACTIONS[preferredLanguage]['cancel']} </Button>
				</Grid>
			</Grid>
		</div>)
		}
	}
export default EventFormContent;