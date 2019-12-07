import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "actions";

import Grid from '@material-ui/core/Grid';
import { Paper } from "@material-ui/core";
import { getLandingPageText } from "utils/language_utils";
import withStyles from "@material-ui/core/styles/withStyles";
import GlobalStyle from "constants/global_style";

class LandingPage extends Component {
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

					{ 
						getLandingPageText(preferredLanguage).split('\n').map( (row, idx) => {
							return  (
								<div className={classes.basicText} key={idx}>
									{row}
								</div>
							)}) 
					}
				</Paper>
			</Grid>
		</Grid>
    );
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
)(LandingPage));
