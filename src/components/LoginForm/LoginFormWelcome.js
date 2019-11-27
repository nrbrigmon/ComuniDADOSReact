import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';
import { navigateTo } from "utils/nav_utils";
import { getWelcomeMessage } from "utils/language_utils";
import { BUTTON_ACTIONS } from "constants/forms";


class LoginFormWelcome extends Component {
	
	handleSignOut = () => {
		this.props.userSignOut()
		navigateTo("login", this.props);
	}
	
  render() {
		let { classes, userInfo, preferredLanguage } = this.props;
		console.log("Welcome 8:20am")
    return (<div>
			<Grid 
				className={classes.buttonGroup}
				container spacing={1} 
				direction="column" alignItems="center">
				<Grid item >
					{ getWelcomeMessage(preferredLanguage, userInfo.username) }


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

export default LoginFormWelcome;
