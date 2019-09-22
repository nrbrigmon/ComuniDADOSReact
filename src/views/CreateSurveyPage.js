import React, { Component } from "react";

import { connect } from "react-redux";
import * as actions from "actions";

import { Paper, Container, Typography } from "@material-ui/core";

class CreateSurveyPage extends Component {
	
	componentDidMount(){
		this.props.setLocation(this.props.history)
	}

  render() {
		let { preferredLanguage } = this.props
    return (
			<Container maxWidth="md">
				<Paper style={{margin:'40px',padding:'40px'}}>
					<Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
						{ ( preferredLanguage === 'en' ? 'Coming Soon' : 'Em Breve' ) }
					</Typography>
			</Paper>
		</Container>
		)
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
)(CreateSurveyPage);
