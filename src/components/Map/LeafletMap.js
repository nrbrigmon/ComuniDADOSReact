import React, { Component } from "react";
import { Map, GeoJSON, FeatureGroup } from "react-leaflet";

import withStyles from "@material-ui/core/styles/withStyles";
import MapStyle from "styles/MapStyle";
import * as _constants from "constants/mapping";
import * as _util from "utils/mapping_utils";


class LeafletMap extends Component {
  render() {
    const position = _constants.MAP_CENTER_COORDS;
    const { classes } = this.props;
    let mappedData = this.props;
    let my_object = <div />;
    // console.log(this.props);
    if (mappedData.type) {
      // console.log("data");
      my_object = (
        <FeatureGroup >
					<GeoJSON 
						data={this.props} 
						onEachFeature={_util.basic_popup} 
						style={_util.initial_style} />
        </FeatureGroup>
      );
    }

    return (
      <Map className={classes.map} center={position} zoom={14}>
        {my_object}

        {_constants.BASE_MAP_OPTIONS}
      </Map>
    );
  }
}

export default withStyles(MapStyle)(LeafletMap);
