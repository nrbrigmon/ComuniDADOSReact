import React, { Component } from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { EVENT_FORM_CONTENTS, BUTTON_ACTIONS } from "constants/forms";
import { EVENT_CATEGORIES_EN, EVENT_CATEGORIES_PR } from "constants/events";
import LeafletMapEventSelect from "components/Map/LeafletMapEventSelect";
import ChapaInputField from "components/Chapa/ChapaInputField";

class EventFormContent extends Component {
	state = {
		eventname:'',
		eventcategory:'',
		eventdescription:'',
		createdby:'',
		eventlatitude:0,
		eventlongitude:0,
		potentialMarkerCoords: [],
		editMode: false
	}
	
	//if component mounts, we need to get the users location if possible, otherwise we have no coordinates
	// componentDidMount(){
	// 	if (this.props.userLocation.show === false){
	// 		this.props.addUserLocation(true)
	// 	}
	// }
	handleChange = (e) =>{
		// console.log(e.target)
		this.setState({
			[e.target.id]: e.target.value
		})
		localStorage.setItem('eventState', JSON.stringify({
			...this.state,
			[e.target.id]: e.target.value
		})) 
	}

	setFeauxLocation = () => {

		// if potentialMarkerCoords is empty, add mapcentercoords (original)
		if (this.state.potentialMarkerCoords.length < 1){
			this.props.addFeauxLocation(this.props.surveyMap.mapCenterCoordinates)
		} else {
			//else use potential markercoords as feauxuserlocation (user informed)
			this.props.addFeauxLocation(this.state.potentialMarkerCoords)
		}
	}

	potentialMarkerCoords = (coords) => {
		this.setState({
			potentialMarkerCoords: coords
		})
	}

	updateEventLocation = ({lat, lng}) => {
		// console.log(lat, lng)
		this.setState({
			eventlatitude: lat,
			eventlongitude: lng,
			editMode: true
		})
		localStorage.setItem('eventState', JSON.stringify({
			...this.state,
			eventlatitude: lat,
			eventlongitude: lng
		})) 
		// console.log(lat, lng)
	}

	handleEventSubmit = (state, props) => {
		// console.log(state)
		let newEvent = {
			eventid: props.randomId, 
			eventname: state.eventname,
			eventcategory: state.eventcategory,
			eventdescription: state.eventdescription,
			eventlatitude: (state.eventlatitude === 0 ? props.userLocation.lat : state.eventlatitude),
			eventlongitude: (state.eventlongitude === 0 ? props.userLocation.long : state.eventlongitude),
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
		
		return ( elem.type === 'dropdown' ? 
				<ChapaInputField 
						handleChange={ e => {
								e = { ...e, target: { ...e.target, id: elem.id } } 
								// console.log(elem.id)
								this.handleChange(e)
							}}
						elem={elem}
						state={this.state}
						props={props}
						options={options}
				/> :
						<ChapaInputField 
							handleChange={ e => this.handleChange(e)}
							// handleKeyPress={ e => this.handleKeyPress(e)}
							elem={elem}
							state={this.state}
							props={props}
							// error={this.props.userInfo.err}
						/>
						)
	}

	renderFormTable = (json, props) => {
		let { classes } = props;
		
		return (<Table>
			<TableBody>
			{
				json.rows.map( ( elem, idx) => {

					return(
						<TableRow key={idx}>
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
		if (this.props.userLocation.show && this.state.editMode === false){
			eventCoords = [userLocation.lat, userLocation.long]
		} else {
			eventCoords = [this.state.eventlatitude, this.state.eventlongitude]
		}
		// console.log(eventCoords)
		// console.log(this.props.userLocation)
    return (<div>
			<Grid container>
				<Grid item sm={6} xs={12} className={classes.formSection}> 
					{ this.renderFormTable(EVENT_FORM_CONTENTS[preferredLanguage], this.props) }		
				</Grid>
				<Grid item sm={6} xs={12} className={classes.formSection}> 
					<LeafletMapEventSelect 
						{...this.props} 
						eventCoords={eventCoords} 
						updateEventLocation={this.updateEventLocation} 
						updatePotentialMarker={this.potentialMarkerCoords} 
						/>					
				</Grid>
				<Grid item sm={12} xs={12} className={classes.buttonGroup}>
				{/* IF there is not user location, and no current location -- we can add a point manually */}
					
					{ !this.props.userLocation.show && eventCoords[0] === 0 ? 
					<Button 
						hidden={false} //hide if there is a marker or user location
						onClick={() => this.setFeauxLocation()}
						variant="contained" 
						className={classes.actionButton}
						color="secondary" >{BUTTON_ACTIONS[preferredLanguage]['addPoint']}</Button>
					 :
					<Button 
						//hide if there is no location or marker
						disabled={this.props.userLocation.show === false} //disable submit if no user location available
						onClick={() => this.handleEventSubmit(this.state, this.props)}
						variant="contained" 
						className={classes.actionButton}
						color="secondary" >{BUTTON_ACTIONS[preferredLanguage]['submit']}</Button>
					}
					{/* IF there is not user location, submit will be disabled until point is added */}

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