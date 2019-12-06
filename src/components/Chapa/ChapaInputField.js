import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import withStyles from "@material-ui/core/styles/withStyles";
import ChapaInputStyle from "components/Chapa/ChapaInputStyle";

class ChapaInputField extends Component {
	// console.log(this.props);
	render(){
		let { elem, state, classes, error, options } = this.props;

		return ( elem.type === 'dropdown' ? 
			<TextField
					select
					id={elem.id}
					label={elem.name}
					type={elem.type}
					className={classes.inputField}
					value={state[elem.id]}
					error={error}
					onChange={this.props.handleChange}
					margin="dense"
					padding="dense"
					variant="outlined"
				>
				{
					options.map(item => (
						<MenuItem key={item.value} value={item.value} id={item.id}>
							{item.label}
						</MenuItem>
					)) 
				}
			</TextField>
			:
			<TextField
					// disabled={item.disable}
					// key={idx}
					// placeholder={"item.placeholder"}
					id={elem.id}
					label={elem.name}
					type={elem.type}
					className={classes.inputField}
					value={state[elem.id]}
					error={error}
					onChange={this.props.handleChange}
					onKeyPress={this.props.handleKeyPress}
					margin="dense"
					padding="dense"
					variant="outlined"
					multiline={elem.type === "multiline"}
					rows={elem.type === "multiline" ? 4 : 1}
					// helperText={item.helperText}
				/>
		);
	}	
}

export default withStyles(ChapaInputStyle)(ChapaInputField);
// export default ChapaInputField;
