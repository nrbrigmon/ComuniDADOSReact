import React, { Component } from "react";

import { connect } from "react-redux";
import * as actions from "actions";
import GlobalStyle from "constants/global_style";
import withStyles from "@material-ui/core/styles/withStyles";

import Container from '@material-ui/core/Container';
import Paper from "@material-ui/core/Paper";
import LoginFormContainer from "components/LoginForm/LoginFormContainer"

class LoginPage extends Component {
	
	componentDidMount(){
		this.props.setLocation(this.props.history)
	}

  render() {
		let { classes, ...rest} = this.props;
    return (
	<Container maxWidth="md">
		<Paper className={classes.paperContainer}>
			
			<LoginFormContainer {...rest} />
		
		</Paper>
	</Container>)
  }
}

function mapStateToProps(state) {
  return {
		preferredLanguage: state.preferredLanguage
		,loadAnimation: state.loadAnimation
		,navLocation: state.navLocation
		,randomId: state.randomId
		,toast: state.toast
		,userInfo: state.userInfo
  };
}

export default withStyles(GlobalStyle)(connect(
  mapStateToProps,
  actions
)(LoginPage));

