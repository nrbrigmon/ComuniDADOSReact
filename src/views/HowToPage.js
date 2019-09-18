import React, { Component } from "react";

import { connect } from "react-redux";
import * as actions from "actions";

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Paper } from "@material-ui/core";

class HowToPage extends Component {
	
	componentDidMount(){
		this.props.setLocation(this.props.history)
	}

  render() {
    return (
		<Container maxWidth="md">
			<Paper style={{margin:'40px',padding:'40px'}}>
				<Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
					ComuniDADOS
				</Typography>
				<Typography variant="h5" color="textSecondary" paragraph>

				<div >
					<iframe src="https://drive.google.com/file/d/1BRxfzB0arMBTpdw7xxRZDJniEJPHrxUb/preview" 
					title="how-to-comunidados"
					width="100%" height="480" frameborder="0" gesture="media" allow="encrypted-media"></iframe>
          <p>Watch the above video for a quick, one minute introduction.</p>
        </div>

	</Typography>
	
	</Paper>
</Container>)
  }
}

export default connect(
  null,
  actions
)(HowToPage);

