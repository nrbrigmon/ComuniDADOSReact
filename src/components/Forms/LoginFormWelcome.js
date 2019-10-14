import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { navigateTo } from "utils/nav_utils";

import Grid from '@material-ui/core/Grid';


class LoginFormWelcome extends Component {
	
	handleSignOut = () => {
		this.props.userSignOut()
		navigateTo("login", this.props);
	}
	
  render() {
		let { classes, userInfo } = this.props;
    return (<div>
			<Grid 
				className={classes.buttonGroup}
				container spacing={1} 
				direction="column" alignItems="center">
				<Grid item>
					Welcome to the App, {userInfo.username} !


					
				<Grid item>
					<Button 
						onClick={() => this.handleSignOut()}
						variant="contained" 
						size="large"
						color="secondary" >
					Sign Out
					</Button>
				</Grid>


				</Grid>
			</Grid>
			</div>
    );
  }
}

export default LoginFormWelcome;
