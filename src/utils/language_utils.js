export const getWelcomeHeadline = (lang, user) => {
	let msg = '';
	if (lang === 'en'){
		msg =	`Welcome to the App, ${user}!`
	} else {
		msg = `Bem-vindo ao aplicativo, ${user}!`
	}
	return msg;
}

export const getWelcomeInstructions = (lang) => {
	let instr = '';
	if (lang === 'en'){
		instr =	`You now have the ability to report points in the Survey section of the app. More features will be coming as we get to them!`
	} else {
		instr = `Agora você tem a capacidade de relatar pontos na seção Pesquisa do aplicativo. Mais recursos virão à medida que chegarmos a eles!`
	}
	return instr;
}

export const getVideoInstructions = (lang) => {
	let instr = '';
	if (lang === 'en'){
		instr =	`Watch the video below for a quick, one minute introduction.`
	} else {
		instr = `Assista ao vídeo abaixo para uma rápida introdução de um minuto`
	}
	return instr;
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

export const getMarkerEventText = (lang) => {

	return (lang === 'en' ? "Location of the Event": "Local do Evento")
} 

export const getMarkerDirectionsText = ({preferredLanguage, userLocation}) => {
	//if there is no user location (no geolocation enabled), return instructions on how to add a basic point
	return (userLocation.lat === null && preferredLanguage === 'en' ? 'If your location is not enabled, use the map to navigate and click "Add Point" to place a marker' : 
				  userLocation.lat === null && preferredLanguage === 'pr' ? 'Se a sua localização não estiver activada, utilize o mapa para navegar e clique em "Adicionar Ponto" para colocar um marcador.' :
			preferredLanguage === 'en' ? "The marker is moveable! Try and place it in the location of the reported event.": "O marcador é móvel! Tente colocá-lo no local do evento relatado.")
} 


