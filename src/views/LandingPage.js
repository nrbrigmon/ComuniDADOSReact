import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "actions";

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Paper } from "@material-ui/core";
import { getLandingPageText } from "utils/language_utils";

class LandingPage extends Component {
	componentDidMount(){
		this.props.setLocation(this.props.history)
	}
	
  
  render() {
		let { preferredLanguage } = this.props;
    return (
			<Container maxWidth="md">
				<Paper style={{margin:'40px',padding:'40px'}}>
			<Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
				ComuniDADOS
			</Typography>
				{ 
					getLandingPageText(preferredLanguage).split('\n').map( (row, idx) => {
						return  (
						<Typography variant="h6" color="textSecondary" paragraph key={idx}>
							{row}
						</Typography>
						)}) 
				}
			</Paper>
		</Container>
    );
  }
}

function mapStateToProps(state) {
  return {
		preferredLanguage: state.preferredLanguage
  };
}

export default connect(
  mapStateToProps,
  actions
)(LandingPage);
