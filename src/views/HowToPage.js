import React, { Component } from "react";

import { connect } from "react-redux";
import * as actions from "actions";

import Grid from '@material-ui/core/Grid';
import { getVideoInstructions } from "utils/language_utils";
import { Paper } from "@material-ui/core";

import withStyles from "@material-ui/core/styles/withStyles";
import GlobalStyle from "constants/global_style";

class HowToPage extends Component {
	
	componentDidMount(){
		this.props.setLocation(this.props.history)
	}

  render() {
		let { preferredLanguage, classes } = this.props;
    return (
			<Grid container
				direction="row"
				justify="center"
				alignItems="center" >
				<Grid item xs={12} sm={8} md={6}>
					<Paper className={classes.paperContainer}>
							<div className={classes.headline}>
							ComuniDADOS
						</div>
						<div className={classes.basicText}>
	
							{ getVideoInstructions(preferredLanguage)}
	
						</div>
						<div className={classes.basicText}>
							<iframe src="https://drive.google.com/file/d/1BRxfzB0arMBTpdw7xxRZDJniEJPHrxUb/preview" 
							title="how-to-comunidados"
							width="100%" height="480" frameBorder="0" gesture="media" allow="encrypted-media"></iframe>

						</div>
					
					</Paper>
			</Grid>
		</Grid>)
  }
}

function mapStateToProps(state) {
  return {
		preferredLanguage: state.preferredLanguage
  };
}

export default withStyles(GlobalStyle)(connect(
  mapStateToProps,
  actions
)(HowToPage));

