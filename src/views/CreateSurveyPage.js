import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import * as actions from "actions";
import MetricAppBar from "components/Metrics/MetricAppBar"
import MetricSurveySelect from "components/Metrics/MetricSurveySelect"
import { Typography } from "@material-ui/core";
import EventFormContainer from "components/Forms/EventFormContainer";
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import SurveyMap from "components/Map/SurveyMap";

/** TO DO
 * on load, prompt to get user location if not already cached in the state
 * https://developers.google.com/web/fundamentals/native-hardware/user-location
 * we also need a metho to get users to either LOGIN or be anonymous without the ability to uplaod points
 */

const genStyle = {
	border:'1px solid blue', 
	padding: '20px', 
	margin: '20px', 
	position: 'absolute'
}

//currently need two seperate variables to feed the two map panes...
const MAP_OPTIONS = {
	coordinates: [-23.6135, -46.59]
	,prefix: "survey"
}

class CreateSurveyPage extends Component {
	
	componentDidMount(){
		this.props.setLocation(this.props.history)
		
	}

  render() {
		let { preferredLanguage } = this.props
    return (
			<div>
			<MetricAppBar >
					<Grid container justify="center">
						{/* First item is for choosing geography */}
						<MetricSurveySelect {...this.props} />
					</Grid>
			</MetricAppBar>
			
			<Grid container spacing={0}>
					{/* helio map */}
        	<Grid item xs={12} >
						<SurveyMap 
							{...this.props} 
							map_constants={MAP_OPTIONS}   
						 />
					</Grid>
				</Grid>

			<Grid item xs={3} style={genStyle}>
				<h2>ABOUT</h2>
				<h6>this map shows blah blah blah</h6>
				<h6>this map shows blah blah blah</h6>
				<h6>this map shows blah blah blah</h6>
				<h6>this map shows blah blah blah</h6>
				<EventFormContainer />
				<br/>OR<br/>
            <div>
              <SearchIcon />
            </div>
								<InputBase 
									fullWidth={true} 
									placeholder="Search for an address" />
			
				
				<Typography component="h6" variant="h6" align="center" color="textPrimary" gutterBottom>
							{ ( preferredLanguage === 'en' ? 'Coming Soon' : 'Em Breve' ) } <br/><br/>
							This is the map section with base map toggle, legend, and more
						</Typography>
			</Grid>


			</div>
		)
  }
}


function mapStateToProps(state) {
  return {
		preferredLanguage: state.preferredLanguage
		,mapLayers: state.mapLayers
  };
}

export default connect(
  mapStateToProps,
  actions
)(CreateSurveyPage);
