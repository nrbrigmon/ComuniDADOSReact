import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';
import LoginFormError from "components/LoginForm/LoginFormError";
import { LOGIN_CONTENTS, BUTTON_ACTIONS } from "constants/forms";
import ChapaInputField from "components/Chapa/ChapaInputField";
import { handleLoginEvent } from "utils/user_utils"

class ResetFormContent extends Component {
	state = {
		email: '',
		password: '',
		passwordConfirm: '',
		view: 'Reset'
	}

	
	handleChange = (e) =>{
		// console.log(e)
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	handleKeyPress = (e) => {
		// console.log(e.key)
		if (e.key === "Enter" ){
			handleLoginEvent(this.props, this.state)
		}
		if (this.props.userInfo.err === true){
			this.props.handleUserUpdate("err",false)
		}
	}

	renderFormRows = (lang, classes) => {
		
		let template = LOGIN_CONTENTS[lang]['rows']
		return template.map( (elem, idx) => {
			// let skipLogic = false;
			let skipLogic = elem.id === 'username'; 
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
		let resetPasswordText = BUTTON_ACTIONS[preferredLanguage]['resetPassword']
		
    return (<div>
				<Grid 
					className={classes.centralAlign}
					container 
					spacing={1} 
					direction="column" 
					alignItems="center">

					<h3>Fill out details below to reset your password.</h3>
					
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
							{ resetPasswordText }
						</Button>
					</Grid>

				</Grid> 

			</div>
    );
  }
}

export default ResetFormContent;
