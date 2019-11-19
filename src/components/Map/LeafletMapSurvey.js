import React, { Component } from "react";
import { Map } from "react-leaflet";
import withStyles from "@material-ui/core/styles/withStyles";
import MapStyle from "components/Map/MapStyle";
import FindMeIcon from "components/FindMeButton/FindMeIcon";
import ChapaMarkers from "components/Map/ChapaMarkers/ChapaMarkers";
import * as _constants from "constants/mapping";
// import * as _util from "utils/mapping_utils";

class LeafletMapSurvey extends Component {

  render() {
    let { coordinates } = this.props.map_constants;
		let { classes, mapLayers, userLocation, preferredLanguage, chapaEvents, metricSelection } = this.props;
		let displayMarkers = false;
		
		if (chapaEvents.length >= 1) {
			displayMarkers = true;
		}
	
		return (
			<Map 
				className={classes.surveyMap} 
				center={coordinates} 
				zoom={15}>
				
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
