//*   color schemes  *//
export const COLOR_SCHEMES = {
	sequential: {
		1: ['#ffffb2', '#fecc5c', '#fd8d3c', '#f03b20', '#bd0026'],
		2: ['#ffffcc', '#a1dab4', '#41b6c4', '#2c7fb8', '#253494'],
		3: ['#edf8fb', '#b3cde3', '#8c96c6', '#8856a7', '#810f7c'],
		4: ['#f6eff7', '#bdc9e1', '#67a9cf', '#1c9099', '#016c59'],
		5: ['#f0f9e8', '#bae4bc', '#7bccc4', '#43a2ca', '#0868ac'],
		6: ['#ECF0F6', '#B2C2DB', '#6182B5', '#4E71A6', '#43618F'],
		7: ['#F2D2D3', '#EBB7B9', '#D4686C', '#CC4E52', '#C1373C']
	},
	diverging: {
		1: ['#a6611a', '#dfc27d', '#f5f5f5', '#80cdc1', '#018571'],
		2: ['#ca0020', '#f4a582', '#f7f7f7', '#92c5de', '#0571b0'],
		3: ['#d01c8b', '#f1b6da', '#f7f7f7', '#b8e186', '#4dac26'],
		4: ['#d7191c', '#fdae61', '#ffffbf', '#abd9e9', '#2c7bb6'],
		5: ['#e66101', '#fdb863', '#f7f7f7', '#b2abd2', '#5e3c99'],
		6: ['#ca0020', '#f4a582', '#ffffff', '#bababa', '#404040'],
		7: ['#d7191c', '#fdae61', '#ffffbf', '#abdda4', '#2b83ba']
	}
	,qualitativeSchemes: {
		1: ['#a6cee3','#1f78b4','#b2df8a','#33a02c','#fb9a99','#e31a1c','#fdbf6f','#ff7f00','#cab2d6','#6a3d9a','#ffff99','#b15928'],
		2: ['#8dd3c7','#ffffb3','#bebada','#fb8072','#80b1d3','#fdb462','#b3de69','#fccde5','#d9d9d9','#bc80bd','#ccebc5','#ffed6f']
	}
};

export const LEGEND_LOOKUP = {
	'none':['Min:','Max:'],
	'gender':['Male (0)','Female (1)'],
	'affirm':['No (0)','Yes (1)'],
	'edu':['Low (0)','High (4)'],
	'commute':['Less than 15 min.(1)','More than 60 min.(4)'],
	'duration':['0 Months (1)','12+ Months (3)'],
	'secureA':['Low (0)','High (1)'],
	'secureB':['Low (0)','High (2)'],
	'superf':['Superficial (1)','Expansive (2)']
}

export const LEGEND_LOOKUP_PR = {
	'none':['Min:','Max:'],
	'gender':['Masculino (0)','Fêmea (1)'],
	'affirm':['No (0)','Sim (1)'],
	'edu':['Baixo (0)','Alto (4)'],
	'commute':['Menos de 15 min.(1)','Mais de 60 min.(4)'],
	'duration':['0 Meses (1)','12+ Meses (3)'],
	'secureA':['Baixo (0)','Alto (1)'],
	'secureB':['Baixo (0)','Alto (2)'],
	'superf':['Superficial (1)','Expansive (2)']
}

export const DESCRIPTION_LOOKUP = {
	ACS_LDR:
		'Percent of people who feel they have access to a community leader who advocates on their behalf.',
	AGE: 'Average age of respondent.',
	ASSAULTO_IMM_VIC:
		'Total complaints about street assault as an everyday challenge, as calculated by the number of times this word was mentioned within the context of the question “is there anything in your neighborhood that bothers you on a constant basis?”',
	BARULHO_IMM_VIC:
		'Total complaints about noise pollution as an everyday challenge, as calculated by the number of times this word was mentioned within the context of the question “is there anything in your neighborhood that bothers you on a constant basis?”',
	BLDG_QLTY:
		'Average level of building quality ranging from 0 (uninhabitable) to 5 (very good conditions). Learn more about building quality assessment from the Chapa field guide, <a href="www.google.com" target="_blank">here</a>.',
	BRTH_REG_NE:
		'Percent of respondents who were born in the states of Bahia, Pernambuco, Ceara, Alagoas, Paraiba, Piaui, Maranhao, Sergipe, Acre, Federal District (DF), Rodonia.',
	BRTH_REG_S:
		'Percent of respondents born in Minas Gerais, Sao Paulo State (interior), Parana, Rio de Janeiro, Goias, Santa Catarina, Rio Grande do Sul.',
	BRTH_SP: 'Percent of respondents who were born in the city of Sao Paulo.',
	CUR_INTENT:
		'Percent of people who want to stay in their homes, as defined by the question “what best describes your intentions for this house?” and responses of either “I will never leave my home” or “I have plans to renovate my home.”',
	DISP_Y:
		'Percent of respondents who have been forcibly removed from their homes at least once in their lives.',
	DROGA_IMM_VIC:
		'Total complaints about drug trafficking as an everyday challenge, as calculated by the number of times this word was mentioned within the context of the question “is there anything in your neighborhood that bothers you on a constant basis?”',
	ED_LVL_0: 'Percent of survey respondents with no formal education.',
	ED_LVL_1:
		'Percent of survey respondents who completed elementary school only.',
	ED_LVL_2: 'Percent of survey respondents with a high school degree.',
	ED_LVL_3: 'Percent of survey respondents with an undergraduate degree.',
	ED_LVL_4: 'Percent of survey respondents with a graduate degree.',
	ED_LVL_FAT_0:
		'Percent of survey respondents whose father has no formal education.',
	ED_LVL_FAT_1:
		'Percent of survey respondents who completed elementary school only.',
	ED_LVL_FAT_2:
		'Percent of survey respondents whose father has a high school degree.',
	ED_LVL_FAT_3:
		'Percent of survey respondents whose father has an undergraduate degree.',
	ED_LVL_FAT_4:
		'Percent of survey respondents whose father has a graduate degree.',
	ED_LVL_FAT_5:
		'Percent of survey respondents whose father has an unknown educational status.',
	ED_LVL_FAT_6:
		'Percent of survey respondents whose father has a technical degree.',
	ED_LVL_MOT_0:
		'Percent of survey respondents whose mother has no formal education.',
	ED_LVL_MOT_1:
		'Percent of survey respondents whose mother has completed elementary school only.',
	ED_LVL_MOT_2:
		'Percent of survey respondents whose mother has a high school degree.',
	ED_LVL_MOT_3:
		'Percent of survey respondents whose mother has an undergraduate degree.',
	ED_LVL_MOT_4:
		'Percent of survey respondents whose mother has a graduate degree.',
	ED_LVL_MOT_5:
		'Percent of survey respondents whose mother has an unknown educational status.',
	ED_LVL_MOT_6:
		'Percent of survey respondents whose mother has a technical degree.',
	EMPL_Y: 'Percent of people currently employed.',
	FUNK_IMM_VIC:
		'Total complaints about funk street parties as an everyday challenge, as calculated by the number of times this word was mentioned within the context of the question “is there anything in your neighborhood that bothers you on a constant basis?”',
	GEN_F: 'The ratio of male to female respondents.',
	// GEN_M: 'Mauris rutrum mi sodales risus placerat molestie.',
	INCOME: 'Average household income.',
	LIXO_IMM_VIC:
		'Total complaints about trash as an everyday challenge, as calculated by the number of times this word was mentioned within the context of the question “is there anything in your neighborhood that bothers you on a constant basis?” ',
	NADA_IMM_VIC:
		'Total responses of no everyday challenge, as calculated by the number of times “nada” was mentioned within the context of the question “is there anything in your neighborhood that bothers you on a constant basis?”',
	NUM_FAM_LOT:
		'Average number of families living on the surveyed lot. Learn more about how lot occupation is assessed from the Chapa field guide, here.',
	NUM_FLR: 'Average building height.',
	NUM_PPL_HSHD: 'Average number of people living in the surveyed household.',
	NUM_SCH_AG: 'Average number of school age children.',
	NUM_YR_HSE:
		'Average number of years that respondent has lived in their current dwelling.',
	NUM_YR_SP:
		'Average number of years that respondent has lived in Sao Paulo.',
	POL_AFL: 'Percent of people who claim affiliation to any political party.',
	POL_PRIOR_ENV:
		'Percent of people who cite environmental stewardship in response to the question “what needs to change now to improve your community?”',
	POL_PRIOR_HSG:
		'Percent of people who cite social housing in response to the question “what needs to change now to improve your community?”',
	POL_PRIOR_INFRA:
		'Percent of people who cite infrastructure and sanitation in response to the question “what needs to change now to improve your community?”',
	POL_PRIOR_TTL:
		'Percent of people who cite tenure and land regularization in response to the question “what needs to change now to improve your community?”',
	POL_PRIOR_WST_MGT:
		'Percent of people who cite systematic waste management in response to the question “what needs to change now to improve your community?”',
	RENOV:
		'Percent of homes that have been expanded, renovated, and/or adapted from their original state.  Learn more about how home expansion is assessed from the Chapa field guide, <a href="www.google.com" target="_blank">here</a>.',
	SNS_GOOD_ACS:
		'Percent of people who believe their home to be well-located relative to city services.',
	SNS_SEC_HSE: 'Percent of people who feel secure inside of their home.',
	SNS_SEC_NEI:
		'Percent of people who feel secure walking on the streets around their home.',
	SPCL_NEEDS:
		'Percent of households with a person who faces physical or mental challenges.',
	USE_HM_INCM:
		'Percent of people who use a space in their home to generate income.'
};

export const DESCRIPTION_LOOKUP_PR = {
	ACS_LDR:
		'Porcentagem de pessoas que sentem que têm acesso a um líder da comunidade que defende em seu nome.',
	AGE: 'Idade média do entrevistado.',
	ASSAULTO_IMM_VIC:
		'Total de queixas sobre assalto como um desafio diário, conforme calculado pelo número de vezes que esta palavra foi mencionada no contexto da questão "Existe alguma coisa em sua vizinhança que o incomoda numa base constante?"',
	BARULHO_IMM_VIC:
		'Total de queixas sobre o barulho como um desafio diário, conforme calculado pelo número de vezes que esta palavra foi mencionada no contexto da questão "Existe alguma coisa em seu bairro que o incomoda em uma base constante?"',
	BLDG_QLTY:
		'Nível médio de qualidade de construção variando de 0 (inabitável) a 5 (muito boas condições). Saiba mais sobre a avaliação da qualidade do edifício no guia de campo de Chapa, aqui.',
	BRTH_REG_NE:
		'Porcentagem de entrevistados que nasceu nos estados do norte e nordeste, incluindo Bahia, Pernambuco, Ceara, Alagoas, Paraiba, Piaui, Maranhao, Sergipe, Acre, Federal District (DF), Rodonia.',
	BRTH_REG_S:
		'Porcentagem de entrevistados que nasceu na capital nos estados do sul e centro, incluindo Minas Gerais, Sao Paulo State (interior), Parana, Rio de Janeiro, Goias, Santa Catarina, Rio Grande do Sul',
	BRTH_SP: 'Porcentagem de entrevistados que nasceu na capital.',
	CUR_INTENT:
		'Porcentagem de pessoas que querem ficar em suas casas, conforme definido pela pergunta "o que melhor descreve suas intenções para esta casa?" e respostas de "Eu nunca irei para minha casa" ou "Tenho planos de renovar minha casa".',
	DISP_Y:
		'Porcentagem de entrevistados que fi removido/a de casa pelomenos uma vez na vida.',
	DROGA_IMM_VIC:
		'Total de queixas sobre o trafico como um desafio diário, conforme calculado pelo número de vezes que esta palavra foi mencionada no contexto da questão "Existe alguma coisa em seu bairro que o incomoda em uma base constante?"',
	ED_LVL_0: 'Percentagem de entrevistados sem educação formal',
	ED_LVL_1:
		'Percentagem de entrevistados que completaram apenas o ensino fundamental.',
	ED_LVL_2: 'Percentagem de entrevistados com grau de ensino médio.',
	ED_LVL_3: 'Percentagem de entrevistados com diploma de graduação.',
	ED_LVL_4: 'Percentagem de entrevistados com diploma de pós-graduação',
	ED_LVL_FAT_0:
		'Percentagem de entrevistados cujo pai não possui educação formal.',
	ED_LVL_FAT_1:
		'Percentagem de entrevistados que completaram apenas o ensino fundamental.',
	ED_LVL_FAT_2:
		'Percentagem de entrevistados cujo pai tem um diploma de ensino médio.',
	ED_LVL_FAT_3:
		'Percentagem de entrevistados cujo pai possui um diploma de graduação.',
	ED_LVL_FAT_4:
		'Percentagem de entrevistados cujo pai possui um diploma de pós-graduação.',
	ED_LVL_FAT_5:
		'Percentagem de entrevistados cujo pai tem um status educacional desconhecido',
	ED_LVL_FAT_6:
		'Percentagem de entrevistados cujo pai possui um diploma técnico.',
	ED_LVL_MOT_0:
		'Percentagem de entrevistados cuja mãe não possui educação formal.',
	ED_LVL_MOT_1:
		'Percentagem de entrevistados cuja mãe completou apenas a escola primária.',
	ED_LVL_MOT_2:
		'Percentagem de entrevistados cuja mãe possui um diploma de ensino médio.',
	ED_LVL_MOT_3:
		'Percentagem de entrevistados cuja mãe possui um diploma de graduação.',
	ED_LVL_MOT_4:
		'Porcentagem de entrevistados cuja mãe possui um diploma de pós-graduação.',
	ED_LVL_MOT_5:
		'Percentagem de entrevistados cuja mãe possui um status educacional desconhecido',
	ED_LVL_MOT_6:
		'Porcentagem de entrevistados cuja mãe possui um diploma técnico.',
	EMPL_Y: 'Porcentagem de pessoas atualmente empregadas',
	FUNK_IMM_VIC:
		'Total de queixas sobre baile funk como um desafio diário, conforme calculado pelo número de vezes que esta palavra foi mencionada no contexto da questão "Existe alguma coisa em sua vizinhança que o incomoda numa base constante?"',
	GEN_F: 'Porcentagem de entrevistadas.',
	GEN_M: 'Porcentagem de entrevistados.',
	INCOME: 'Renda familiar media',
	LIXO_IMM_VIC:
		'Total de queixas sobre o lixo como um desafio diário, conforme calculado pelo número de vezes que esta palavra foi mencionada no contexto da questão "Existe alguma coisa em seu bairro que o incomoda em uma base constante?"',
	NADA_IMM_VIC:
		'As respostas totais de nenhum desafio diário, conforme calculado pelo número de vezes que "nada" foi mencionado no contexto da questão "Existe alguma coisa em sua vizinhança que o incomoda em uma base constante?"',
	NUM_FAM_LOT:
		'Número médio de famílias que vivem no lote pesquisado. Saiba mais sobre como a ocupação do lote é avaliada a partir do guia do campo de Chapa, aqui.',
	NUM_FLR: 'Altura média do edifício.',
	NUM_PPL_HSHD: 'Número médio de pessoas que vivem no domicílio pesquisado.',
	NUM_SCH_AG: 'Número médio de crianças de idade escolar.',
	NUM_YR_HSE: 'A media dos anos que o entrevistado viveu na sua casa atual.',
	NUM_YR_SP: 'A media dos anos que o entrevistado viveu em Sao Paulo.',
	POL_AFL:
		'Porcentagem de pessoas que reivindicam afiliação a qualquer partido político.',
	POL_PRIOR_ENV:
		'Porcentagem de pessoas que citam a administração ambiental em resposta à pergunta "o que precisa mudar agora para melhorar sua comunidade?"',
	POL_PRIOR_HSG:
		'Porcentagem de pessoas que citam habitação social em resposta à pergunta "o que precisa mudar agora para melhorar sua comunidade?"',
	POL_PRIOR_INFRA:
		'Porcentagem de pessoas que citam infra-estrutura e saneamento em resposta à pergunta "o que precisa mudar agora para melhorar sua comunidade?"',
	POL_PRIOR_TTL:
		'Porcentagem de pessoas que citam a posse e a regularização da terra em resposta à pergunta "o que precisa mudar agora para melhorar sua comunidade?"',
	POL_PRIOR_WST_MGT:
		'Porcentagem de pessoas que citam o gerenciamento sistemático de resíduos em resposta à pergunta "o que precisa mudar agora para melhorar sua comunidade?"',
	RENOV:
		'Porcentagem de casas que foram expandidas, renovadas e / ou adaptadas de seu estado original. Saiba mais sobre como a avaliação domiciliar é avaliada a partir do guia de campo de Chapa, <a href="" target="_blank">aqui</a>.',
	SNS_GOOD_ACS:
		'Porcentagem de pessoas que acreditam que sua casa está bem localizada em relação aos serviços da cidade.',
	SNS_SEC_HSE:
		'Porcentagem de pessoas que se sentem seguras dentro de sua casa.',
	SNS_SEC_NEI:
		'Porcentagem de pessoas que se sentem seguras nas ruas perto de casa.',
	SPCL_NEEDS:
		'Porcentagem de domicílios com uma pessoa que enfrenta desafios físicos ou mentais.',
	USE_HM_INCM:
		'Porcentagem de pessoas que usam um espaço em sua casa para gerar renda, alem de aluguel.'
};
