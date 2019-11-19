import React, { Component } from "react";
import { Map, Marker, Popup } from "react-leaflet";
import FindMeIcon from "components/FindMeButton/FindMeIcon";
import * as _constants from "constants/mapping";

class LeafletMapEventSelect extends Component {
	state = {
		moveCount: 0
	}

	componentDidMount(){
		this.props.fetchRandomId()
	}

	renderEventLocation(props){
		if (props.userLocation.lat === null){
			return <div />
		} else {
			return (<div className={props.classes.coords}>
				{(props.userLocation.lat).toFixed(4) }, {(props.userLocation.long).toFixed(4) }
			</div>)
		}
	}

	updateLocationDisplay = (e) => {
		// this.props.updateEventLocation(e)
		let { lat, lng } = e.target._latlng;		// console.log(this.state)
		this.props.updateEventLocation({lat, lng})
		this.setState({
			moveCount: this.state.moveCount + 1
		})
	}

  render() {
		let { classes, preferredLanguage, userLocation, eventCoords } = this.props;
		let coordinates = _constants.MAP_CENTER_COORDS;
		let mapZoom = 17;

		if (userLocation.show){
			coordinates = [userLocation.lat, userLocation.long]		
		}
		
		return (
			<Map 
				className={classes.mapContainer}
				center={coordinates} 
				zoom={mapZoom}
				fadeAnimation={true}
				zoomAnimation={true}
				>
								
				{ userLocation.show ? 
					<Marker 
						draggable={true}
						onDragend={this.updateLocationDisplay}
						position={eventCoords}>
						<Popup>{"Location of the Event"}</Popup>
					</Marker> : <div></div> }
								
				{ userLocation.show ? 
					<FindMeIcon location={userLocation} language={preferredLanguage} moveCount={this.state.moveCount} /> : <div></div> }

				{ this.renderEventLocation(this.props) }

				{ _constants.BASE_MAP_OPTIONS({baseMapOpacity:1, baseMapSelection:0}) }
				
      </Map>
    );
  }
}

export default LeafletMapEventSelect;
