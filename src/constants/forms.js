export const LOGIN_CONTENTS = {
		en: {
			forgotMsg: 'Forget your username/password? Click Here.',
			resetInstr: 'Please enter your email address. We will send you an email to reset your password.',
			rows: [{
				id: 'username',
				name: 'Username',
				type: 'text'
			},{
				id: 'password',
				name: 'Password',
				type: 'password'
			},{
				id: 'passwordConfirm',
				name: 'Confirm Password',
				type: 'password'
			},{
				id: 'email',
				name: 'Email',
				type: 'text'
			}]
		}
		,
		pr: {
			forgotMsg: 'Esqueceu seu nome de usuário / senha? Clique aqui.',
			resetInstr: 'Por favor, indique o seu endereço de e-mail. Enviaremos um e-mail para redefinir sua senha.',
			rows: [{
				id: 'username',
				name: 'Nome de Usuário',
				type: 'text'
			},{
				id: 'password',
				name: 'Senha',
				type: 'password'
			},{
				id: 'passwordConfirm',
				name: 'Confirme Senha',
				type: 'password'
			},{
				id: 'email',
				name: 'Email',
				type: 'text'
			}]
		}
}

export const EVENT_FORM_CONTENTS = {
	en: {
		title: 'Event Details',
		header: ['Field Name', 'User Input'],
		rows: [{
				name: 'Event Name',
				id: 'eventName',
				type: 'text'
			},{
				name: 'Event Category',
				id: 'eventCategory',
				type: 'dropdown'
			},{
				name: 'Notes',
				id: 'eventDescription',
				type: 'multiline'
			}
		]
	},
	pr: {
		title: 'Detalhes do Evento',
		header: ['Field Name', 'User Input'],
		rows: [{
			name: 'Nome do Evento',
			id: 'eventName',
			type: 'text'
		},{
			name: 'Descrição do Evento',
			id: 'eventCategory',
			type: 'dropdown'
		},{
			name: 'Notas',
			id: 'eventDescription',
			type: 'multiline'
		}
	]
	}
}

export const BUTTON_ACTIONS = 
	{
		en: {
				submit: 'Submit',
				cancel: 'Cancel',
				postEvent: 'Post Event',
				login: 'Login',
				signUp: 'Register',
				signOut: 'Sign Out',
				sendEmail: 'Send Email',
				type: 'text',
				addPoint: 'Add Point'
			}
		,
		pr: {
			submit: 'Enviar',
			cancel: 'Cancelar',
			postEvent: 'Adicionar Evento',
			login: 'Conecte-se',
			signUp: 'Registro',
			signOut: 'Sair',
			sendEmail: 'Enviar Email',
			type: 'text',
			addPoint: 'Adicionar Ponto'
		}
}

export const SURVEY_LEGEND = {
	en:{
		title: 'ABOUT',
		desc: 'This map will display survey results as collected by the user. To see survey results or upload your own data, please login or create an account.' 
	},
	pr: {
		title: 'SOBRE',
		desc: 'Este mapa exibirá os resultados da pesquisa conforme coletados pelo usuário. Para ver os resultados da pesquisa ou enviar seus próprios dados, faça o login ou crie uma conta.'
	}
}

export const POPOVER_TEXT = {
	en: {
		findMe: "Show Your Location",
		slider: "Base Map Transparency",
		baseMap: "Toggle Base Map",
		postEvent: "Registered Users Only"
	},
	pr: {
		findMe: "Mostre sua Localização",
		slider: "Transparência do Mapa Base",
		baseMap: "Alterar Mapa Base",
		postEvent: "Apenas Usuários Registrados"
	}
}

export const COLOR_PALETTE = {
	en: {
		change: "Click to change color palette"
		,instruction: "Select a Color Palette:"
	},
	pr: {
		change: "Mostre sua Localização"
		,instruction: "Selecione uma paleta de cores:"
	}
}

