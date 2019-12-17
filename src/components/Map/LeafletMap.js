import React, { Component } from "react";
import { Map, GeoJSON, FeatureGroup } from "react-leaflet";
import * as _constants from "constants/mapping";
import * as _util from "utils/mapping_utils";
import FindMeIcon from "components/FindMeButton/FindMeIcon";

class LeafletMap extends Component {

	componentDidMount(){
		// console.log(this.props)
		let { prefix } = this.props.map_constants;
		let { type } = this.props.mapLayers;
		//load layers on mount
		this.props.fetchMapLayerById(prefix, type);
	}

  render() {
    let { coordinates, prefix, mapZoom } = this.props.map_constants;
		let { classes, mapLayers, preferredLanguage, userLocation } = this.props;
		// console.log(this.props)
		let object_check = Object.keys(mapLayers[prefix]).length
		let leaflet_layer = <div />;

		if (object_check > 0) {
      // use the mapped data prefix to get data key 
      leaflet_layer = (
        <FeatureGroup >
					<GeoJSON 
						key={_util.updateKey()} //this function is needed to update the GeoJSON when new data is loaded
						data={mapLayers[prefix]} 
						onEachFeature={(feature, layer) => _util.basic_popup(feature, layer, this.props.mapLayers["metric"], preferredLanguage) }  
						style={ (feature) =>  _util.set_style(feature, this.props.mapLayers["metric"], this.props.mapLayers.colorPalette)} 
						/>
        </FeatureGroup>
      );
		}
		
		return (
		<Map 
			className={classes.map} 
			center={coordinates} 
			zoom={mapZoom}
			fadeAnimation={true}
			zoomAnimation={true}
			>
			
			{ userLocation.show ? 
				<FindMeIcon location={userLocation} language={preferredLanguage} /> : <div></div> }

			{leaflet_layer}

			{_constants.BASE_MAP_OPTIONS(mapLayers, classes)}
				
   	   </Map>
    );
  }
}

export default LeafletMap;
