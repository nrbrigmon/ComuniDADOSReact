import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import * as actions from "actions";
import MetricAppBar from "components/Metrics/MetricAppBar"
import MetricSurveySelect from "components/Metrics/MetricSurveySelect"
// import InputBase from '@material-ui/core/InputBase';
import EventFormLegend from "components/EventForm/EventFormLegend";
import LeafletMapSurvey from "components/Map/LeafletMapSurvey";
import FindMeButton from "components/FindMeButton/FindMeButton";
import BaseMapToggle from "components/Map/BaseMapToggle/BaseMapToggle";
// import { getCache } from "utils/cache_utils";

/** TO DO
 * on load, prompt to get user location if not already cached in the state
 * https://developers.google.com/web/fundamentals/native-hardware/user-location
 * we also need a metho to get users to either LOGIN or be anonymous without the ability to uplaod points
 */

class SurveyPage extends Component {
	
	componentDidMount(){
		this.props.setLocation(this.props.history)
		// this.props.addUserLocation()
		// console.log(getCache("chapaEvents"))

		// this needs to be removed when uploaded to the server or else it wont recognize new posts
		// need to implement a timing event, if user hasn't logged in 1 hour, refresh cache...
		// if ( getCache("chapaEvents") === null){
		this.props.fetchAllEvents()
		// }
	}

  render() {
		let { preferredLanguage, mapLayers, updateBaseLayer } = this.props;		
		let { baseMapSelection } = mapLayers;

    return (
			<div>
			<MetricAppBar >
					<Grid container justify="center">
						{/* First item is for choosing geography */}
						<MetricSurveySelect {...this.props} />
					</Grid>
			</MetricAppBar>
			
			<FindMeButton />

			<BaseMapToggle 
				preferredLanguage={preferredLanguage} 
				action={updateBaseLayer} 
				baseMapSelection={baseMapSelection} />

			<Grid container spacing={0}>
				{/* helio map */}
				<Grid item xs={12} >
					<LeafletMapSurvey 
						// variableMapCenter={variableMapCenter}
						{...this.props}  
						/>
				</Grid>
			</Grid>

			<EventFormLegend />

			</div>
		)
  }
}


function mapStateToProps(state) {
  return {
		chapaEvents: state.chapaEvents
		// ,loadAnimation: state.loadAnimation
		,mapLayers: state.mapLayers
		,metricSelection: state.metricSelection
		,preferredLanguage: state.preferredLanguage
		,randomId: state.randomId
		,userInfo: state.userInfo
		,popover: state.popover
		,userLocation: state.userLocation
		,surveyMap: state.surveyMap
  };
}

export default connect(
  mapStateToProps,
  actions
)(SurveyPage);
