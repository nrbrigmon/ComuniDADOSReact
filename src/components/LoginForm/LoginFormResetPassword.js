import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";
import { LOGIN_CONTENTS, BUTTON_ACTIONS } from "constants/forms";
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ChapaInputField from "components/Chapa/ChapaInputField";


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
		let userObj = {
			...this.state,
			preferredLanguage: this.props.preferredLanguage
		}
		//trigger server reset of credentials
		this.props.sendPasswordResetEmail(userObj)
		//this function does not exist
		//use parent props to reverse state
		this.props.backToLogin()
	}
	
	handleKeyPress = (e) => {
		// console.log(e.key)
		if (e.key === "Enter" ){
			this.handleClick()
		}
	}
	
  render() {
		let { preferredLanguage, classes } = this.props;
		let loginInstructions = LOGIN_CONTENTS[preferredLanguage]['resetInstr'];
		let buttionAction = BUTTON_ACTIONS[preferredLanguage]['sendEmail']
		let my_element = {
			id: 'userEmail',
			name: 'Email',
			type: 'text'
		}
    return (<div>
			<Grid 
				container spacing={1} direction="column" alignItems="center">
				<Grid item className={classes.section}>
					
				<Typography component="div">
							<Box fontStyle="italic" m={1}>
								{loginInstructions}
							</Box>
						</Typography>
					
					<ChapaInputField 
						handleChange={ e => this.handleChange(e)}
						handleKeyPress={ e => this.handleKeyPress(e)}
						elem={my_element}
						state={this.state}
						// props={this.props}
						// error={this.props.userInfo.err}
					/>
				</Grid>
				<Grid item className={classes.section}>
					
					{/* <Typography component="div">
						<Box fontStyle="italic" m={1}>
							This is a beta feature that is not yet ready...
						</Box>
					</Typography> */}
					<Button
							// disabled
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
