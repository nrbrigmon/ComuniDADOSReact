import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

import { navigateTo } from "utils/nav_utils";
import Grid from '@material-ui/core/Grid';

import { LOGIN_CONTENTS } from "constants/forms";


class LoginFormContent extends Component {
	state = {
		username: '',
		password: '',
		passwordConfirm: '',
		email: '',
		view: 'Login'
	}

	renderFormRows = (lang, classes) => {
		let template = LOGIN_CONTENTS[lang]
		return template.map( (elem, idx) => {
			// let skipLogic = false;
			let skipLogic = (this.state.view === 'Login' && (elem.id === 'passwordConfirm' || elem.id === 'email')) 
			// console.log(skipLogic)
				return (
					skipLogic ? <TableRow key={idx} />: 
					<TableRow key={idx}>
						<TableCell className={classes.tableCell} size="small">{elem.text}</TableCell>
						<TableCell className={classes.tableCell} size="small"> 
							<TextField
									error={this.props.userInfo.err === true}
									id={elem.id}
									value={this.state[elem.id]}
									onChange={ e => this.handleChange(e)}
									type={elem.type}
									className={classes.tableText}
									// margin="dense"
									// padding="dense"
									/>
						</TableCell>
					</TableRow>
				)
			})
		
	}

	handleChange = (e) =>{
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

	handleLoginEvent = () => {
		if (this.state.view === 'Register' && (this.state.password !== this.state.passwordConfirm)){
			this.props.userPasswordsNoMatch(this.props.preferredLanguage)
		}
		
		if (this.state.view === 'Register'){
			this.props.userRegister(this.state)
		} else {
			this.props.userLogin(this.state)
		}
		navigateTo("home", this.props);
	}

	
  render() {
		let { classes, preferredLanguage } = this.props;
		let LoginText = ( preferredLanguage === 'en' ? 'Login' : 'Conecte-se' )
		let RegisterText = ( preferredLanguage === 'en' ? 'Register' : 'Registro' )
		
		
    return (<div>
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
					color={ ( this.state.view === 'Register' ? "primary" : "default" ) }	
					variant={ ( this.state.view === 'Register' ? "contained" : "outlined" ) }
					onClick={()=> this.setState({'view':'Register'} ) }
					>{RegisterText}</Button>
      </ButtonGroup>

			<Table className={classes.tableContainer}>
				<TableBody>
					 { this.renderFormRows(preferredLanguage, classes) }
				</TableBody>
			</Table>
			
			<Grid 
				className={classes.buttonGroup}
				container spacing={1} 
				direction="column" alignItems="center">
				<Grid item>
					<Button 
						onClick={() => this.handleLoginEvent()}
						variant="contained" 
						size="large"
						color="primary" >
						{ ( this.state.view === 'Login' ? LoginText : RegisterText ) }
					</Button>
				</Grid>
			</Grid>
			</div>
    );
  }
}

export default LoginFormContent;
