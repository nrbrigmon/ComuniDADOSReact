import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "actions";

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Paper } from "@material-ui/core";

class LandingPage extends Component {
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
				

ComuniDADOS is a data visualization tool designed to help citizens and their governments make decisions about the future of urban neighborhoods. Its current form visualizes 50 of over 400 variables studied within a comparative analysis of redevelopment’s (“upgrading”) impact on 903 households located within two of Sao Paulo’s largest informal settlements.

			</Typography>
			<Typography variant="h5" color="textSecondary" paragraph>
Established with the support of a National Science Foundation Postdoctoral Fellowship (2015 – 2017), ComuniDADOS was constructed by Nathan Brigmon and Kristine Stiphany.
			</Typography>
			<Typography variant="h5" color="textSecondary" paragraph>

Explore allied work, research methodology, and ComuniDADOS future phasing at www.chapa.io.

			</Typography></Paper>
		</Container>
    );
  }
}

export default connect(
  null,
  actions
)(LandingPage);
