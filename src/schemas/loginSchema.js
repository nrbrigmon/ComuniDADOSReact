import Joi from '@hapi/joi';

export const LOGIN_SCHEMA = Joi.object({
	// user_id: Joi.string().regex(/[a-zA-Z0-9-_]/).required(),
	username: Joi.string().regex(/[a-zA-Z0-9-_]/).min(5).max(30).required(),
	password: Joi.string().regex(/^[a-zA-Z0-9]{6,30}$/),
	email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'io', 'gov'] } })
});