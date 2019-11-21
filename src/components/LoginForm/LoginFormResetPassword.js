import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { LOGIN_CONTENTS, BUTTON_ACTIONS } from "constants/forms";
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


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
					
				<Typography component="div">
							<Box fontStyle="italic" m={1}>
								{loginInstructions}
							</Box>
						</Typography>
					<TextField
									// error={this.props.userInfo.err === true}
									// id={elem.id}
									disabled
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
					
						<Typography component="div">
							<Box fontStyle="italic" m={1}>
								This is a beta feature that is not yet ready...
							</Box>
						</Typography>
					<Button
							disabled
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
