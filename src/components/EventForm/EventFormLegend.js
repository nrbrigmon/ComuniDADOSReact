import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import EventFormDialog from "components/EventForm/EventFormDialog";
import Paper from "@material-ui/core/Paper";
import withStyles from "@material-ui/core/styles/withStyles";
import EventFormStyle from "components/EventForm/EventFormStyle";
import { SURVEY_LEGEND } from "constants/forms";

import { connect } from "react-redux";
import * as actions from "actions";

class EventFormLegend extends Component {
	
  render() {
		let { classes, preferredLanguage } = this.props;		
    return (
			<Grid container spacing={0}>
					<Grid item xs={3}>
						<Paper className={classes.legendContainer}>
      				<Typography variant="h6" >{ SURVEY_LEGEND[preferredLanguage]['title'] }</Typography>
							<p> { SURVEY_LEGEND[preferredLanguage]['desc'] } </p>

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
		};
	}
	
export default withStyles(EventFormStyle)(connect(
	mapStateToProps,
	actions
)(EventFormLegend));