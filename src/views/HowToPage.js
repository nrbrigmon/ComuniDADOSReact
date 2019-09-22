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
		let { preferredLanguage } = this.props;
    return (
		<Container maxWidth="md">
			<Paper style={{margin:'40px',padding:'40px'}}>
				<Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
					ComuniDADOS
				</Typography>
				<Typography variant="h5" color="textSecondary" paragraph>

					<iframe src="https://drive.google.com/file/d/1BRxfzB0arMBTpdw7xxRZDJniEJPHrxUb/preview" 
					title="how-to-comunidados"
					width="100%" height="480" frameBorder="0" gesture="media" allow="encrypted-media"></iframe>

								{ (
					preferredLanguage === 'en' ? 'Watch the above video for a quick, one minute introduction.' : 'Assista ao vídeo acima para uma rápida introdução de um minuto.')}
    

	</Typography>
	
	</Paper>
</Container>)
  }
}

function mapStateToProps(state) {
  return {
		preferredLanguage: state.preferredLanguage
  };
}

export default connect(
  mapStateToProps,
  actions
)(HowToPage);

