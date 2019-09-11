import React, { Component } from "react";
import { Map, GeoJSON, FeatureGroup } from "react-leaflet";

import withStyles from "@material-ui/core/styles/withStyles";
import MapStyle from "styles/MapStyle";
import * as _constants from "constants/mapping";
import * as _util from "utils/mapping_utils";


class LeafletMap extends Component {

	componentDidMount(){
		// console.log(this.props)
		//load layers on mount
		this.props.fetchMapLayerById(this.props.map_constants.prefix, this.props.mapLayers.type);
	}

  render() {
    let { coordinates, prefix } = this.props.map_constants;
		let { classes } = this.props;
		let object_check = Object.keys(this.props.mapLayers[prefix]).length
    let leaflet_layer = <div />;
		console.log(object_check)
    
    if (object_check > 0) {
      // use the mapped data prefix to get data key 
      leaflet_layer = (
        <FeatureGroup >
					<GeoJSON 
						data={this.props.mapLayers[prefix]} 
						onEachFeature={_util.basic_popup} 
						style={_util.initial_style} />
        </FeatureGroup>
      );
    }

    return (
      <Map className={classes.map} center={coordinates} zoom={14}>
        {leaflet_layer}

        {_constants.BASE_MAP_OPTIONS}
      </Map>
    );
  }
}

export default withStyles(MapStyle)(LeafletMap);
