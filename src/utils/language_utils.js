/**
 * This document contains functions and variables for getting strings for portuguese and english.
 */
export const getWelcomeHeadline = (lang, user) => {
	return (lang === 'en' ?
		`Welcome to the App, ${user}!`:
		`Bem-vindo ao aplicativo, ${user}!`)
}

export const getWelcomeInstructions = (lang) => {
	return (lang === 'en' ?	
		`You now have the ability to report points in the Survey section of the app. More features will be coming as we get to them!` :
		`Agora você tem a capacidade de relatar pontos na seção Pesquisa do aplicativo. Mais recursos virão à medida que chegarmos a eles!`)
	
}

export const getVideoInstructions = (lang) => {
	return (lang === 'en' ? 
		`Watch the video below for a quick, one minute introduction.` :
		`Assista ao vídeo abaixo para uma rápida introdução de um minuto` )
}

export const getLandingPageText = (lang) => {
	return (lang === 'en' ?
		`ComuniDADOS is a data visualization tool designed to help citizens and their governments make decisions about the future of urban neighborhoods. Its current form visualizes 50 of over 400 variables studied within a comparative analysis of redevelopment's ("upgrading") impact on 903 households located within two of Sao Paulo's largest informal settlements. 
		\n
		Established with the support of a National Science Foundation Postdoctoral Fellowship (2015 – 2017), ComuniDADOS was constructed by Nathan Brigmon and Kristine Stiphany.
		\n
		Explore allied work, research methodology, and ComuniDADOS future phasing at www.chapa.io.` :
		
		`O ComuniDADOS é uma ferramenta de visualização de dados projetada para ajudar os cidadãos e seus governos a tomar decisões sobre o futuro dos bairros urbanos. Sua forma atual visualiza 50 das mais de 400 variáveis estudadas em uma análise comparativa do impacto da remodelação ("modernização") em 903 famílias localizadas em dois dos maiores assentamentos informais de São Paulo.
		\n
		Estabelecido com o apoio de uma bolsa de pós-doutorado da National Science Foundation (2015 - 2017), o ComuniDADOS foi construído por Nathan Brigmon e Kristine Stiphany.
		\n
		Explore o trabalho aliado, a metodologia de pesquisa e as fases futuras do ComuniDADOS em www.chapa.io.`
		)
}

export const getMarkerEventText = (lang) => {
	return (lang === 'en' ? "Location of the Event": "Local do Evento")
} 

export const getMarkerDirectionsText = ({preferredLanguage, userLocation}) => {
	//if there is no user location (no geolocation enabled), return instructions on how to add a basic point
	return (userLocation.lat === null && preferredLanguage === 'en' ? 
		'If your location is not enabled, use the map to navigate and click "Add Point" to place a marker' : 
		userLocation.lat === null && preferredLanguage === 'pr' ? 
		'Se a sua localização não estiver activada, utilize o mapa para navegar e clique em "Adicionar Ponto" para colocar um marcador.' :
		preferredLanguage === 'en' ? "The marker is moveable! Try and place it in the location of the reported event.": 
		"O marcador é móvel! Tente colocá-lo no local do evento relatado.")
} 

export const interpretErrorMessage = (msg, lang) => {
	let errorText;
	//password match fail
	if (msg.includes("password match")) {
		errorText = ( lang === 'en' ? 
			'Sorry! Your passwords do not match! Try again.' : 
			'Desculpa! Suas senhas não coincidem! Tente novamente.')
	} else if (msg.includes("username")){
		errorText = ( lang === 'en' ? 
		`"Username" length must be at least five characters long.` :
		`O comprimento do "Nome de Usuário" deve ter pelo menos cinco caracteres.`)
	} else if (msg.includes(`"password" is not allowed`)){
		errorText = ( lang === 'en' ? 
		`"Password" is not allowed to be empty.` :
		`"Senha" não pode ficar vazia.`)
	} else if (msg.includes(`"email" is not allowed`)){
		errorText = ( lang === 'en' ? 
		`"Email" is not allowed to be empty.` :
		`"Email" não pode ficar vazia.`)
	} else if (msg.includes(`"email" must be a valid email`)){
		errorText = ( lang === 'en' ? 
		`"Email" must be a valid email address.` :
		`"Email" deve ser um email válido.`)
	} else if (msg.includes(`password`) && msg.includes(`fails to match the required pattern`)){
		errorText = ( lang === 'en' ? 
		`"Password" field must be at least six characters in length.` :
		`"Senha" deve ter pelo menos seis caracteres.`)
	} else {
		errorText = msg
	} 
	return errorText
}

