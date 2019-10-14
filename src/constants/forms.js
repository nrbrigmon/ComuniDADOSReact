export const LOGIN_CONTENTS = 
	{
		en: [{
				id: 'username',
				text: 'Username',
				type: 'text'
			},{
				id: 'password',
				text: 'Password',
				type: 'password'
			},{
				id: 'passwordConfirm',
				text: 'Confirm Password',
				type: 'password'
			},{
				id: 'email',
				text: 'Email',
				type: 'text'
			}]
		,
		pr: [{
			id: 'username',
			text: 'Nome de Usuário',
			type: 'text'
		},{
			id: 'password',
			text: 'Senha',
			type: 'password'
		},{
			id: 'passwordConfirm',
			text: 'Confirme Senha',
			type: 'password'
		},{
			id: 'email',
			text: 'Email',
			type: 'text'
		}]
}

export const EVENT_FORM_CONTENTS = {
	header: ['Field Name', 'User Input'],
	rows: [{
		name: 'Event Name',
		id: 'eventName'
	},{
		name: 'Event Category',
		id: 'eventCategory'
	},{
		name: 'Notes',
		id: 'eventDescription'
	}
	]
}