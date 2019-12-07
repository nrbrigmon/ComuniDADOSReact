import React, { Component } from "react";
import { Map, Marker, Popup } from "react-leaflet";
import FindMeIcon from "components/FindMeButton/FindMeIcon";
import { getMarkerEventText, getMarkerDirectionsText } from "utils/language_utils";
import * as _constants from "constants/mapping";

class LeafletMapEventSelect extends Component {
	state = {
		moveCount: 0
	}

	componentDidMount(){
		this.props.fetchRandomId()
	}

	updatePotentialMarkerState(props, {lat,lng}){
		if (props.userLocation.lat === null){
			//send an update to the parent component's state that we now have a lat and lng
			props.updatePotentialMarker([lat,lng])
		}
		//else don't do anything
	}

	renderEventLocation(props){
		if (props.userLocation.lat === null){
			return <div />
		} else {
			return (<div className={props.classes.coords}>
				{(props.userLocation.lat).toFixed(4) }, {(props.userLocation.long).toFixed(4) }
			</div>
			)
		}
	}

	renderEventInstructions(props){
		return (
			<div className={props.classes.directionsContainer} >
				<div className={props.classes.directionsText}>
				{ getMarkerDirectionsText(props) }
				</div>
			</div>
				)
	}

	updateLocationDisplay = (e) => {
		// enable marker to be moveable
		this.setState({
			moveCount: this.state.moveCount + 1
		})
		let { lat, lng } = e.target._latlng;		// console.log(this.state)
		this.props.updateEventLocation({lat, lng})
	}

  render() {
    	let { mapCenterCoordinates } = this.props.surveyMap;
		let { classes, preferredLanguage, userLocation, eventCoords } = this.props;
		let coordinates = [];
		// console.log(this.props)
		if (userLocation.show){
			// if the user is showing set map coordinates to the user location
			coordinates = [userLocation.lat, userLocation.long]		
		} else {
			coordinates = mapCenterCoordinates
		}
		
		return (
			
			<Map 
				className={classes.mapContainer}
				center={coordinates} 
				zoom={17}
				fadeAnimation={true}
				zoomAnimation={true}
				onMoveend={e=>this.updatePotentialMarkerState( this.props, e.target.getCenter())}
				>		
				{ userLocation.show ? 
					<Marker 
						draggable={true}
						onDragend={this.updateLocationDisplay}
						position={eventCoords}>
						<Popup>{ getMarkerEventText(preferredLanguage) }</Popup>
					</Marker> : <div></div> }
								
				{ userLocation.show ? 
					<FindMeIcon location={userLocation} language={preferredLanguage} moveCount={this.state.moveCount} /> : <div></div> }

				{ this.renderEventLocation(this.props) }
				
				{ this.renderEventInstructions(this.props) }

				{ _constants.BASE_MAP_OPTIONS({baseMapOpacity:1, baseMapSelection:0}) }
				
      </Map>
		)
  }
}

export default LeafletMapEventSelect;
