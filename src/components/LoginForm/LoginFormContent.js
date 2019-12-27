import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';
import ButtonGroup from "@material-ui/core/ButtonGroup";

import LoginFormResetPassword from "./LoginFormResetPassword";
import LoginFormError from "components/LoginForm/LoginFormError";
import { LOGIN_CONTENTS, BUTTON_ACTIONS } from "constants/forms";
import ChapaInputField from "components/Chapa/ChapaInputField";
import { handleLoginEvent } from "utils/user_utils"

class LoginFormContent extends Component {
	state = {
		username: '',
		password: '',
		passwordConfirm: '',
		email: '',
		view: 'Login',
		reset: false
	}

	
	handleChange = (e) =>{
		// console.log(e)
		this.setState({
			[e.target.id]: e.target.value
		})
		localStorage.setItem('state', JSON.stringify({
			...this.state,
			[e.target.id]: e.target.value
		})) 
		if (this.props.userInfo.err === true){
			this.props.handleUserUpdate("err",false)
		}
	}


	handleKeyPress = (e) => {
		// console.log(e.key)
		if (e.key === "Enter" ){
			handleLoginEvent(this.props, this.state)
		}
	}

	renderFormRows = (lang, classes) => {
		
		let template = LOGIN_CONTENTS[lang]['rows']
		return template.map( (elem, idx) => {
			// let skipLogic = false;
			let skipLogic = (this.state.view === 'Login' && (elem.id === 'passwordConfirm' || elem.id === 'email')) 
			// console.log(skipLogic)
				return (
					skipLogic ? <TableRow key={idx} />
					: 
					<TableRow key={idx}>
						<TableCell className={classes.tableCell} size="small"> 
						
							<ChapaInputField 
								handleChange={ e => this.handleChange(e)}
								handleKeyPress={ e => this.handleKeyPress(e)}
								elem={elem}
								state={this.state}
								props={this.props}
								error={this.props.userInfo.err}
							/>
						</TableCell>
					</TableRow>
				)
			})
		
	}

	
  render() {
		let { classes, preferredLanguage } = this.props;
		let LoginText = BUTTON_ACTIONS[preferredLanguage]['login']
		let RegisterText = BUTTON_ACTIONS[preferredLanguage]['signUp']
		
    return (<div>
			{(
				this.state.reset === false ?
				<Grid 
					className={classes.centralAlign}
					container 
					spacing={1} 
					direction="column" 
					alignItems="center">
					

					<ButtonGroup 
						size="large" 
						className={classes.buttonGroup}
						fullWidth={true} 
						aria-label="small outlined button group">
						<Button
							color={ ( this.state.view === 'Login' ? "primary" : "default" ) }
							variant={ ( this.state.view === 'Login' ? "contained" : "outlined" ) }
							onClick={()=> this.setState({'view':'Login'} ) }
							>{LoginText}</Button>
						<Button
							// disabled //this will be removed after beta period
							color={ ( this.state.view === 'Register' ? "primary" : "default" ) }	
							variant={ ( this.state.view === 'Register' ? "contained" : "outlined" ) }
							onClick={()=> this.setState({'view':'Register'} ) }
							>{RegisterText}</Button>
					</ButtonGroup>
					
					<LoginFormError {...this.props} />
					

					<Table className={classes.tableContainer}>
						<TableBody>
							{ this.renderFormRows(preferredLanguage, classes) }
						</TableBody>
					</Table>
				
					<Grid item className={classes.section}>
						<Button 
							onClick={() => handleLoginEvent(this.props, this.state)}
							variant="contained" 
							size="large"
							color="primary" >
							{ ( this.state.view === 'Login' ? LoginText : RegisterText ) }
						</Button>
					</Grid>

					<Grid item className={classes.section}>
						<Button 
							className={classes.resetText}
							size="small"
							onClick={ () => this.setState({ reset: true })} >
							{LOGIN_CONTENTS[preferredLanguage]['forgotMsg'] } 
							</Button>
					</Grid>
				</Grid> : <div />
			)}

			{(
				this.state.reset ? 
					<LoginFormResetPassword {...this.props } backToLogin={() => this.setState({ reset: false})} />
					: <div />
			)}
			</div>
    );
  }
}

export default LoginFormContent;
