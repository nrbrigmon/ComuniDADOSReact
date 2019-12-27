import React, { Component } from "react";

import { connect } from "react-redux";
import * as actions from "actions";
import GlobalStyle from "constants/global_style";
import withStyles from "@material-ui/core/styles/withStyles";

import Container from '@material-ui/core/Container';
import Paper from "@material-ui/core/Paper";
import ResetFormContainer from "components/LoginReset/ResetFormContainer"
import { checkExpiryToken } from "utils/user_utils"
/*
When the page loads we need to make sure that it loads with parameters and that those parameters have not expired

*/
class LoginResetPage extends Component {
	
	getQueryParams(props){
		let params = props.search.split('?')
		let paramErrors	= ( params.length < 2 ? true : 		// do query params exist
							params[1].length < 3 ? true : 		// is first query param long enough
							params[1].split('=').length < 2 ? true : 	//does second query param exist
							params[1].split('=')[1].length < 3 ? true : //is second query param long enough
							checkExpiryToken(params[1].split('=')[1]) ? true : //check if token has expired
							false )

		if (paramErrors){
			console.log('query fails')
			return false
		} else {
			return {
				userEmail: params[1].split('=')[0]
			} 
		}
	}

	componentDidMount(){
		this.props.setLocation(this.props.history)
		// console.log( this.props.location.search.split('?') )
		// console.log(this.props.location.search.split('?')[1].split('='))
		
	}

	render() {
		let { classes, ...rest} = this.props;
		let queryParams = this.getQueryParams(this.props.location)
		// console.log(queryParams)
		return (
			<Container maxWidth="md">
				<Paper className={classes.paperContainer}>
					{ queryParams === false ? 
						<p>This page has expired or the credentials are incorrect.</p> :
						<ResetFormContainer {...rest} {...queryParams} />
					}
				</Paper>
			</Container>
		)
	}
}

function mapStateToProps(state) {
  return {
		preferredLanguage: state.preferredLanguage
		,loadAnimation: state.loadAnimation
		,navLocation: state.navLocation
		,randomId: state.randomId
		,userInfo: state.userInfo
  };
}

export default withStyles(GlobalStyle)(connect(
  mapStateToProps,
  actions
)(LoginResetPage));

