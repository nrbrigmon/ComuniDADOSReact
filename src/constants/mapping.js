import React from "react";
import { TileLayer, LayersControl, LayerGroup } from "react-leaflet";

// CSS for main Map
export const MAP_CSS = {
  height: "500px"
};

//currently need two seperate variables to feed the two map panes...
export const HELIO_MAP = {
	coordinates: [-23.6135, -46.59]
	,prefix: "helio"
}

export const SAO_MAP = {
	coordinates: [-23.6321, -46.453]
	,prefix: "sao"
}

// Map Options for Map
export const MAP_CENTER_COORDS = [-23.6321, -46.453];

//Map Base Map PROVIDERS HERE: https://leaflet-extras.github.io/leaflet-providers/preview/
export const BASE_MAP_OPTIONS = function(_mapLayers) {
	let { baseMapOpacity, baseMapSelection } = _mapLayers
	
	//section for toggling base map
	return(
	<LayersControl position="topright">
    <LayersControl.BaseLayer name="OSM B&W" checked={0 === baseMapSelection}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile-cyclosm.openstreetmap.fr/[cyclosm|cyclosm-lite]/{z}/{x}/{y}.png"
				opacity={baseMapOpacity}
      />
    </LayersControl.BaseLayer>
    <LayersControl.BaseLayer name="OSM"  checked={1 === baseMapSelection}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				opacity={baseMapOpacity}
      />
    </LayersControl.BaseLayer>
    <LayersControl.BaseLayer name="Aerial Hybrid"  checked={2 === baseMapSelection}>
			<LayerGroup>
				<TileLayer
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url="http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
					opacity={baseMapOpacity}
				/>
				{/* <TileLayer
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url="https://a.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
					ext="png"
					opacity={baseMapOpacity}
				/>
				<TileLayer
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url="https://b.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
					ext="png"
					opacity={baseMapOpacity}
				/> */}
			</LayerGroup>
    </LayersControl.BaseLayer>
  </LayersControl>
)
};

/*
export const BW_Map = L.tileLayer(
  "https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.png",
  {
    maxZoom: 20,
    ext: "png",
    attribution:
      'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }
);

export const OSM_Map = L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
});

export const HYBRID_Aerial = L.layerGroup([
  L.tileLayer(
    "http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    {
      attribution:
        "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
    }
  ),
  L.tileLayer(
    "http://stamen-tiles-{s}.a.ssl.fastly.net/toner-lines/{z}/{x}/{y}.{ext}",
    {
      attribution:
        'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      subdomains: "abcd",
      minZoom: 2,
      maxZoom: 20,
      ext: "png"
    }
  ),
  L.tileLayer(
    "http://stamen-tiles-{s}.a.ssl.fastly.net/toner-labels/{z}/{x}/{y}.{ext}",
    {
      attribution:
        'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      subdomains: "abcd",
      minZoom: 2,
      maxZoom: 20,
      ext: "png"
    }
  )
]);
*/