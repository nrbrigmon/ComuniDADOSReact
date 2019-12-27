import React, { Component } from "react";
import { Marker, Popup } from "react-leaflet";
// import * as B from 'Leaflet.vector-markers';
import { getMarkerIcon } from "utils/mapping_utils";

class ChapaMarkers extends Component {

	render(){
		let { events } = this.props;
		
		return(
			<span>
				{
					events.map( (elem, idx) => {
						return (
						<span key={idx}>
							<Marker
								icon={getMarkerIcon(elem.eventcategory)}
								position={[elem.eventlatitude, elem.eventlongitude]}>
								<Popup>{elem.eventname}</Popup>
							</Marker>
							
						</span>)
					})
				}
			</span>)
	}

}

export default ChapaMarkers;