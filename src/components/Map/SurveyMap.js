import React, { Component } from "react";
import { Map, GeoJSON, FeatureGroup } from "react-leaflet";

import withStyles from "@material-ui/core/styles/withStyles";
import MapStyle from "components/Map/MapStyle";
import * as _constants from "constants/mapping";
import * as _util from "utils/mapping_utils";

class SurveyMap extends Component {

	componentDidMount(){
		// console.log(this.props)
		let { prefix } = this.props.map_constants;
		let { type } = this.props.mapLayers;
		//load layers on mount
		// this.props.fetchMapLayerById(prefix, type);
	}

  render() {
    let { coordinates, prefix } = this.props.map_constants;
		let { classes, mapLayers } = this.props;
		console.log(this.props)

		
		return (
			<Map 
				className={classes.surveyMap} 
				center={coordinates} 
				zoom={15}>
				
        {/* {leaflet_layer} */}

				{_constants.BASE_MAP_OPTIONS(mapLayers, classes)}
				
      </Map>
    );
  }
}

export default withStyles(MapStyle)(SurveyMap);
