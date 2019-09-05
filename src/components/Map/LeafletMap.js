import React, { Component } from "react";
import L from "leaflet";

import * as _constants from "../../constants/mapping";

class LeafletMap extends Component {
  componentDidMount() {
    this.map = L.map("map", {
      center: _constants.MAP_CENTER_COORDS,
      zoom: 16,
      zoomControl: false,
      maxZoom: 18,
      minZoom: 2,
      scrollWheelZoom: "false",
      inertia: true,
      inertiaDeceleration: 6000,
      layers: [_constants.BW_Map, _constants.OSM_Map, _constants.HYBRID_Aerial]
    });

    let baseMaps = {
      "<span style='color: gray'>Aerial</span>": _constants.HYBRID_Aerial,
      "<span style='color: gray'>OSM</span>": _constants.OSM_Map,
      "<span style='color: gray'>B & W</span>": _constants.BW_Map
      // "Terrain": _constants.HYBRID_Terrain
    };

    L.control.layers(baseMaps, {}).addTo(this.map);

    // STILL LOOKING FOR A WAY TO MOVE THE ZOOM CONTORL TO BOTTOM RIGHT
    L.control.zoom({ position: "bottomright" }).addTo(this.map);
  }

  render() {
    return <div id="map" style={_constants.MAP_CSS} />;
  }
}
export default LeafletMap;
