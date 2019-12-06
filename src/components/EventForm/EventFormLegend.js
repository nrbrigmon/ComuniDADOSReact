import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import EventFormDialog from "components/EventForm/EventFormDialog";
import Paper from "@material-ui/core/Paper";
import withStyles from "@material-ui/core/styles/withStyles";
import EventFormStyle from "components/EventForm/EventFormStyle";
import { SURVEY_LEGEND } from "constants/forms";

import { connect } from "react-redux";
import * as actions from "actions";

class EventFormLegend extends Component {
	/**
	 * next steps:
	 * 1. when user clicks add point, fire an action to drop marker and feaux location
	 */
  render() {
		let { classes, preferredLanguage } = this.props;		
    return (
			<Grid container spacing={0}>
					<Grid item xs={3}>
						<Paper className={classes.legendContainer}>
      				<div className={classes.headline}>{ SURVEY_LEGEND[preferredLanguage]['title'] }</div>
							<div className={classes.basicText}> { SURVEY_LEGEND[preferredLanguage]['desc'] } </div>

							<EventFormDialog {...this.props} />
						</Paper>
				</Grid>
			</Grid>)
		}
	}


	function mapStateToProps(state) {
		return {
			preferredLanguage: state.preferredLanguage
			,randomId: state.randomId
			,userInfo: state.userInfo
			,popover: state.popover
			,userLocation: state.userLocation
			,surveyMap: state.surveyMap
		};
	}
	
export default withStyles(EventFormStyle)(connect(
	mapStateToProps,
	actions
)(EventFormLegend));