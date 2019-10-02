import React, { Component } from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class EventFormContent extends Component {

  render() {
		// let { classes, action } = this.props;
    return (<div>
				I need to develop some JSON to automate this better
			<Table>
				<TableHead>
						<TableRow>
							<TableCell>Field Name</TableCell>
							<TableCell>User Input</TableCell>						
							</TableRow>
				</TableHead>
				<TableBody>
					<TableRow>
						<TableCell>Event Name</TableCell>
						<TableCell> 
							<TextField
									value={''}
									onChange={e => console.log(e)}
									margin="dense"
									padding="dense"
								/>
							</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>Event Category</TableCell>
						<TableCell> DROPDOWN OR User Input</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>Notes</TableCell>
						<TableCell>
							<TextField
									value={''}
									onChange={e => console.log(e)}
									margin="dense"
									padding="dense"
								/>
						</TableCell>
					</TableRow>
				</TableBody>
			</Table>
			<p>Note, also keep track of date/time. <br/>
				Username through Oauth <br/>
				GPS coordianates <br/>
				button to adjust location again? <br/>
				unique event id 

			</p>
				<Button 
					onClick={() => console.log('click son')}
					variant="contained" 
					color="primary" >Save</Button>
					<Button 
						onClick={() => console.log('click son')}
						variant="contained" 
						color="secondary" >Cancel</Button>
		</div>)
		}
	}
export default EventFormContent;