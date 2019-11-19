const proxy = require('http-proxy-middleware')

module.exports = function (app) {
		console.log(process.env.NODE_ENV) 
		// console.log(process.ENV) 
		
		if (process.env.NODE_ENV === 'dev'){
			console.log("will use development api")
			app.use(proxy('/api/*', {target: 'http://localhost:5000/'}))
			debugger;
		} else {
			console.log("will use production build")
			app.use(proxy('/api/*', { target: 'http://3.233.186.17:5000/' }))
		}
		//   app.use(proxy('/auth/google', { target: 'http://localhost:5000/' }));
}
