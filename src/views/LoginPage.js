import React, { Component } from "react";

import { connect } from "react-redux";
import * as actions from "actions";

import Container from '@material-ui/core/Container';
import { Paper } from "@material-ui/core";
import LoginFormContainer from "components/Forms/LoginFormContainer"

class LoginPage extends Component {
	
	componentDidMount(){
		this.props.setLocation(this.props.history)
	}

  render() {
    return (
		<Container maxWidth="md">
			<Paper style={{margin:'40px',padding:'40px'}}>
			
				<LoginFormContainer {...this.props} />

	
	</Paper>
</Container>)
  }
}

function mapStateToProps(state) {
  return {
		preferredLanguage: state.preferredLanguage
		,userInfo: state.userInfo
		,navLocation: state.navLocation,
  };
}

export default connect(
  mapStateToProps,
  actions
)(LoginPage);

