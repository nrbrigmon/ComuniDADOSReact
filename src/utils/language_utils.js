export const getWelcomeMessage = (lang, user) => {
	let msg = '';
	if (lang === 'en'){
		msg =	`Welcome to the App, ${user}!`
	} else {
		msg = `Bem-vindo ao aplicativo, ${user}!`
	}
	return msg;
}

export const getLandingPageText = (lang) => {
	let pageText = '';

	if (lang === 'en'){
		pageText =	`ComuniDADOS is a data visualization tool designed to help citizens and their governments make decisions about the future of urban neighborhoods. Its current form visualizes 50 of over 400 variables studied within a comparative analysis of redevelopment's ("upgrading") impact on 903 households located within two of Sao Paulo's largest informal settlements. 
		\n
		Established with the support of a National Science Foundation Postdoctoral Fellowship (2015 – 2017), ComuniDADOS was constructed by Nathan Brigmon and Kristine Stiphany.
		\n
		Explore allied work, research methodology, and ComuniDADOS future phasing at www.chapa.io.`
		
	} else {
		pageText = `O ComuniDADOS é uma ferramenta de visualização de dados projetada para ajudar os cidadãos e seus governos a tomar decisões sobre o futuro dos bairros urbanos. Sua forma atual visualiza 50 das mais de 400 variáveis estudadas em uma análise comparativa do impacto da remodelação ("modernização") em 903 famílias localizadas em dois dos maiores assentamentos informais de São Paulo.
		\n
		Estabelecido com o apoio de uma bolsa de pós-doutorado da National Science Foundation (2015 - 2017), o ComuniDADOS foi construído por Nathan Brigmon e Kristine Stiphany.
		\n
		Explore o trabalho aliado, a metodologia de pesquisa e as fases futuras do ComuniDADOS em www.chapa.io.
		`
	}
	return pageText;
}
