import React, { Component } from "react";
import { Marker, Popup } from "react-leaflet";
import * as B from 'Leaflet.vector-markers';
// import { getRandomColor } from "utils/color_utils";

class ChapaMarkers extends Component {

	render(){
		let { events, selection } = this.props;

		//1. create different color icon assets
		// let myIcon = L.icon({
		// 	iconUrl: testUrl,
		// 	iconSize: [64,64],
		// 	iconAnchor: [32, 64],
		// 	popupAnchor: [0,-64],
		// 	shadowUrl: null,
		// 	shadowSize: null,
		// 	shadowAnchor: null
		// });
		
		// let randomColor = getRandomColor();
		
		let chapaIcon = B.VectorMarkers.icon({
			icon: (selection.row === -1 ? 'map-pin' : selection.icon)
			,markerColor: "blue"
			// ,iconSize: [64,30]
			// ,iconSize: [64,64]
			// ,spin: true
		});
		// console.log(selection)
		// console.log(events)
		return(<span>
							{
								events.map( (elem, idx) => {
									return (
										<Marker
											key={idx}
											icon={chapaIcon}
											position={[elem.eventlatitude, elem.eventlongitude]}>
											<Popup>{elem.eventname}</Popup>
										</Marker>)
								})
							}
		</span>)
	}

}

export default ChapaMarkers;