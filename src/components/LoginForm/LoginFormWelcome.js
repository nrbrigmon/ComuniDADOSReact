import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';
import { navigateTo } from "utils/nav_utils";
import { getWelcomeHeadline, getWelcomeInstructions } from "utils/language_utils";
import { BUTTON_ACTIONS } from "constants/forms";
import withStyles from "@material-ui/core/styles/withStyles";
import GlobalStyle from "constants/global_style";

class LoginFormWelcome extends Component {
	
	componentDidMount(){
		console.log("welcome, update animation")
		this.props.stopLoadingAnimation()
	}
	handleSignOut = () => {
		this.props.userSignOut()
		navigateTo("login", this.props);
	}
	
  render() {
	let { classes, userInfo, preferredLanguage } = this.props;
    return (<div>
			<Grid 
				className={classes.centralAlign}
				container 
				spacing={1} 
				direction="column" 
				alignItems="center">
				<Grid item >
					<div className={classes.headline}>
						{ getWelcomeHeadline(preferredLanguage, userInfo.username) }
					</div>
					<div className={classes.basicText}>
						{ getWelcomeInstructions(preferredLanguage)}
					</div>

				</Grid>
				<Grid item ></Grid>
				<Grid item>
					<Button 
						onClick={() => this.handleSignOut()}
						variant="contained" 
						size="large"
						color="secondary" >
					{ BUTTON_ACTIONS[preferredLanguage]['signOut'] }
					</Button>
				</Grid>


			</Grid>
			</div>
    );
  }
}

export default withStyles(GlobalStyle)(LoginFormWelcome);
