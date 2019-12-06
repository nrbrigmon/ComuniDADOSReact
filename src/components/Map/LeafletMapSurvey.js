import React, { Component } from "react";
import { Map } from "react-leaflet";
import withStyles from "@material-ui/core/styles/withStyles";
import MapStyle from "components/Map/MapStyle";
import FindMeIcon from "components/FindMeButton/FindMeIcon";
import ChapaMarkers from "components/Map/ChapaMarkers/ChapaMarkers";
import * as _constants from "constants/mapping";
// import * as _util from "utils/mapping_utils";

class LeafletMapSurvey extends Component {

	handleMapCenterChange = ({lat, lng}) => {
		// console.log(lat, lng)
		this.props.updateMapCenterCoordinates([lat, lng])
	}

	handleMapZoomChange = (zoom) => {
		// console.log(zoom)
		this.props.updateMapZoom(zoom)
	}

  render() {
    let { mapCenterCoordinates, mapZoom } = this.props.surveyMap;
	let { classes, mapLayers, userLocation, preferredLanguage, chapaEvents, metricSelection } = this.props;
	let displayMarkers = false;
	let variableMapCenter;
	
	if (chapaEvents.length >= 1) {
		displayMarkers = true;
	}
	if (userLocation.show){
		variableMapCenter = [userLocation.lat, userLocation.long]
	} else {
		variableMapCenter = mapCenterCoordinates;
	}

	return (
		<Map 
			className={classes.surveyMap} 
			center={variableMapCenter} 
			zoom={mapZoom}
			onMoveend={e=>this.handleMapCenterChange(e.target.getCenter()) }
			onZoomend={e=>this.handleMapZoomChange(e.target.getZoom())}
			>
			
			
			{ userLocation.show ? 
				<FindMeIcon location={userLocation} language={preferredLanguage} /> : 
				<div></div> }

			{ displayMarkers ? <ChapaMarkers events={chapaEvents} selection={metricSelection} /> : <div></div> }

			{_constants.BASE_MAP_OPTIONS(mapLayers, classes)}				

      </Map>
    );
  }
}

export default withStyles(MapStyle)(LeafletMapSurvey);
