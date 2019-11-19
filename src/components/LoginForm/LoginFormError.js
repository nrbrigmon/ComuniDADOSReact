import React, { Component } from "react";

import Grid from '@material-ui/core/Grid';

class LoginFormError extends Component {

	
  render() {
		let { classes, userInfo } = this.props;
		
		// console.log(this.props)
    return (<div>
			{ ( 
				userInfo.err === false ? <div></div> : 
				<Grid 
				container spacing={1} direction="column" alignItems="center">
				<Grid item>
					<p className={classes.errorText}>{userInfo.errMsg}</p>
				</Grid>
			</Grid> 
			)}
		</div>
    );
  }
}

export default LoginFormError;
