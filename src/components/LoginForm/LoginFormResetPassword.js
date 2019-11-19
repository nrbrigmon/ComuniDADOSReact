import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { LOGIN_CONTENTS, BUTTON_ACTIONS } from "constants/forms";

class LoginFormResetPassword extends Component {
	state = {
		userEmail: ''
	}
	
	handleChange = (e) =>{
		this.setState({
			userEmail: e.target.value
		})
	}

	handleClick = () => {
		//trigger server reset of credentials
		//this function does not exist
		//use parent props to reverse state
		this.props.backToLogin()
	}
	
  render() {
		let { preferredLanguage, classes } = this.props;
		let loginInstructions = LOGIN_CONTENTS[preferredLanguage]['resetInstr'];
		let buttionAction = BUTTON_ACTIONS[preferredLanguage]['sendEmail']
		// console.log(BUTTON_ACTIONS[preferredLanguage])
    return (<div>
			<Grid 
				container spacing={1} direction="column" alignItems="center">
				<Grid item className={classes.section}>
					<p>{loginInstructions}</p>
					<TextField
									// error={this.props.userInfo.err === true}
									// id={elem.id}
									placeholder="yours@example.com"
									value={this.state.userEmail}
									onChange={this.handleChange}
									// type={elem.type}
									className={classes.tableText}
									// margin="dense"
									// padding="dense"
								/>
				</Grid>
				<Grid item className={classes.section}>
					<Button
							color="primary"
							variant="contained"
							onClick={ ()=> this.handleClick() }
							>{buttionAction}</Button>
				</Grid>
			</Grid> 
		</div>
    );
  }
}

export default LoginFormResetPassword;
