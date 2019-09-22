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
		let { preferredLanguage } = this.props;
    return (
			<Container maxWidth="md">
				<Paper style={{margin:'40px',padding:'40px'}}>
			<Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
				ComuniDADOS
			</Typography>
			<Typography variant="h5" color="textSecondary" paragraph>
				{ (
					preferredLanguage === 'en' ? 'ComuniDADOS is a data visualization tool designed to help citizens and their governments make decisions about the future of urban neighborhoods. Its current form visualizes 50 of over 400 variables studied within a comparative analysis of redevelopment’s (“upgrading”) impact on 903 households located within two of Sao Paulo’s largest informal settlements.' :'O ComuniDADOS é uma ferramenta de visualização de dados projetada para ajudar os cidadãos e seus governos a tomar decisões sobre o futuro dos bairros urbanos. Sua forma atual visualiza 50 das mais de 400 variáveis estudadas em uma análise comparativa do impacto da remodelação ("modernização") em 903 famílias localizadas em dois dos maiores assentamentos informais de São Paulo.' 
				)}
			</Typography>
			<Typography variant="h5" color="textSecondary" paragraph>
				{ (
					preferredLanguage === 'en' ? 'Established with the support of a National Science Foundation Postdoctoral Fellowship (2015 – 2017), ComuniDADOS was constructed by Nathan Brigmon and Kristine Stiphany.' : 'Estabelecido com o apoio de uma bolsa de pós-doutorado da National Science Foundation (2015 - 2017), o ComuniDADOS foi construído por Nathan Brigmon e Kristine Stiphany.'
					)
				}
			</Typography>
			<Typography variant="h5" color="textSecondary" paragraph>
			{ (
					preferredLanguage === 'en' ? 'Explore allied work, research methodology, and ComuniDADOS future phasing at www.chapa.io.' :
					'Explore o trabalho aliado, a metodologia de pesquisa e as fases futuras do ComuniDADOS em www.chapa.io.'
			)}

			</Typography></Paper>
		</Container>
    );
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
)(LandingPage);
