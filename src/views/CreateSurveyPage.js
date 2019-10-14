import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import * as actions from "actions";
import MetricAppBar from "components/Metrics/MetricAppBar"
import MetricSurveySelect from "components/Metrics/MetricSurveySelect"
import { Typography } from "@material-ui/core";
import EventFormContainer from "components/Forms/EventFormContainer";
// import InputBase from '@material-ui/core/InputBase';
// import SearchIcon from '@material-ui/icons/Search';
import SurveyMap from "components/Map/SurveyMap";
import { HELIO_MAP } from "constants/mapping";
import { Paper } from "@material-ui/core";
import FindMeButton from "components/Map/FindMe/FindMeButton";
import BaseMapToggle from "components/Map/BaseMapToggle/BaseMapToggle";

/** TO DO
 * on load, prompt to get user location if not already cached in the state
 * https://developers.google.com/web/fundamentals/native-hardware/user-location
 * we also need a metho to get users to either LOGIN or be anonymous without the ability to uplaod points
 */

const genStyle = {
	border:'1px solid #999', 
	padding: '10px 20px', 
	margin: '10px 10px', 
	position: 'absolute',
	bottom: '20px',
	width: '33%'
}

class CreateSurveyPage extends Component {
	
	componentDidMount(){
		this.props.setLocation(this.props.history)
		this.props.fetchRandomId()
		
	}

  render() {
		let { preferredLanguage, userLocation, mapLayers } = this.props;		
		let { baseMapSelection } = mapLayers;
		// console.log(userLocation) 
		if (userLocation.show){
			HELIO_MAP.coordinates = [userLocation.lat, userLocation.long]
			HELIO_MAP.mapZoom = 17

		}
    return (
			<div>
			<MetricAppBar >
					<Grid container justify="center">
						{/* First item is for choosing geography */}
						<MetricSurveySelect {...this.props} />
					</Grid>
			</MetricAppBar>
			
			<FindMeButton preferredLanguage={preferredLanguage} action={this.props.addUserLocation} />

			<BaseMapToggle preferredLanguage={preferredLanguage} action={this.props.updateBaseLayer} baseMapSelection={baseMapSelection} />

			<Grid container spacing={0}>
					{/* helio map */}
        	<Grid item xs={12} >
						<SurveyMap 
							{...this.props} 
							map_constants={HELIO_MAP}   
						 />
					</Grid>
				</Grid>
				<Grid container spacing={0}>

					<Grid item xs={3}>
						<Paper style={genStyle}>
      				<Typography variant="h6" >ABOUT</Typography>
							<p>This map will display survey results as collected by the user. To see survey results or upload your own data, please login or create an account.</p>

								<EventFormContainer {...this.props} />
						</Paper>
					</Grid>

				</Grid>
			</div>
		)
  }
}


function mapStateToProps(state) {
  return {
		preferredLanguage: state.preferredLanguage
		,mapLayers: state.mapLayers
		,userInfo: state.userInfo
		,userLocation: state.userLocation
		,randomId: state.randomId
  };
}

export default connect(
  mapStateToProps,
  actions
)(CreateSurveyPage);
