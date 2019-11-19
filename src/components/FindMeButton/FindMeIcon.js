import React, { Component } from "react";
import { Popup, CircleMarker } from "react-leaflet";
import Typography from "@material-ui/core/Typography";

class FindMeIcon extends Component {

	displayPopUpText(lang, userLocation){	
		let text_pt1 = (lang === 'en' ? 'This is your current location!' : 'Esta é a sua localização atual!')
		let text_pt2 = (lang === 'en' ? `Accuracy: ~${userLocation.accurMeters} meters` : `Precisão: ~${userLocation.accurMeters} metros`)

		return(<div>
						<Typography variant="subtitle2" gutterBottom>{text_pt1}</Typography>
						<Typography variant="caption" gutterBottom>{text_pt2}</Typography>
					</div>  )
	}

	render(){
		let { language, location } = this.props;
		let mainColor = '#3498db';
		let popupLocationText = (language === 'en' ? this.displayPopUpText('en', location) : this.displayPopUpText('pr', location) )
		let coords = [location.lat, location.long]
		
		return(<span>
			<CircleMarker 
					weight={0.0}
					fillOpacity={0.3}
					fillColor={mainColor}
					radius={15}
					center={coords}>
			</CircleMarker>

			<CircleMarker 
					color="white"
					weight={1}
					fillOpacity={1}
					fillColor={mainColor}
					radius={7}
					center={coords}>
					<Popup>{popupLocationText}</Popup>
			</CircleMarker>

		</span>)
	}
}

export default FindMeIcon;