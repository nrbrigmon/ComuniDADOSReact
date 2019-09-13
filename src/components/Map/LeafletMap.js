import React, { Component } from "react";
import { Map, GeoJSON, FeatureGroup } from "react-leaflet";

import withStyles from "@material-ui/core/styles/withStyles";
import MapStyle from "styles/MapStyle";
import * as _constants from "constants/mapping";
import * as _util from "utils/mapping_utils";


/**
 * 
 * 
 * 
 * set up mapping util to style layer
 * use functions to read metric object and color object
 * need to figure out how to style individual features and not entire thing...
 */
class LeafletMap extends Component {

	componentDidMount(){
		// console.log(this.props)
		let { prefix } = this.props.map_constants;
		let { type } = this.props.mapLayers;
		//load layers on mount
		this.props.fetchMapLayerById(prefix, type);
	}

  render() {
    let { coordinates, prefix } = this.props.map_constants;
		let { classes, mapLayers } = this.props;
		let object_check = Object.keys(mapLayers[prefix]).length
		let leaflet_layer = <div />;
    // console.log(this.props.mapLayers[prefix])
    if (object_check > 0) {
      // use the mapped data prefix to get data key 
      leaflet_layer = (
        <FeatureGroup >
					<GeoJSON 
						key={_util.updateKey()}
						data={mapLayers[prefix]} 
						onEachFeature={(feature, layer) => _util.basic_popup(feature, layer, this.props.mapLayers["metric"]) }  
						style={ (feature) => _util.set_style(feature, this.props.mapLayers["metric"]) } 
						/>
        </FeatureGroup>
      );
		}
		
		// let layerVal1 = layer.feature.properties[columnLookup];
		// layer.setStyle({
		// 	fillColor: myFillColor(layerVal1),
		// 	fillOpacity: myFillOpacity(layerVal1),
		// 	opacity: myStrokeOpacity(layerVal1)
		// });

    return (
      <Map className={classes.map} center={coordinates} zoom={14}>
        {leaflet_layer}

        {_constants.BASE_MAP_OPTIONS}
      </Map>
    );
  }
}

export default withStyles(MapStyle)(LeafletMap);
