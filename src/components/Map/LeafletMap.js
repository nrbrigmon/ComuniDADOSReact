import React, { Component } from "react";
import { Map, Marker, Popup, GeoJSON, FeatureGroup } from "react-leaflet";
import Typography from "@material-ui/core/Typography"
import * as _constants from "constants/mapping";
import * as _util from "utils/mapping_utils";

class LeafletMap extends Component {

	displayPopUpText(lang, userLocation){
		
		let text_pt1 = (lang === 'en' ? 'This is your current location!' : 'Esta é a sua localização atual!')
		let text_pt2 = (lang === 'en' ? `Accuracy: ~${userLocation.accurMeters} meters` : `Precisão: ~${userLocation.accurMeters} metros`)

		return(<div>
						<Typography variant="subtitle2" gutterBottom>{text_pt1}</Typography>
						<Typography variant="caption" gutterBottom>{text_pt2}</Typography>
					</div> 
		)
	}
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
		// console.log(mapLayers.colorPalette)
		let popupLocationText = (preferredLanguage === 'en' ? this.displayPopUpText('en', userLocation) : this.displayPopUpText('pr', userLocation) )

		// console.log(this.props)
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
					<Marker position={[userLocation.lat, userLocation.long]}>
						<Popup>{popupLocationText}</Popup>
					</Marker> : <div></div> }

        {leaflet_layer}

				{_constants.BASE_MAP_OPTIONS(mapLayers, classes)}
				
      </Map>
    );
  }
}

export default LeafletMap;
