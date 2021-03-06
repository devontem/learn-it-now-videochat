var userController = require('./userController');
var passport = require('passport');

module.exports = function(app){

	// '/users'
	app.post('/', userController.newUser);
	app.get('/', userController.getUsers);
	// app.get('/:id', userController.getOneUser);

	// // '/signIn'
	app.post('/signIn', passport.authenticate('local', { session: true }), userController.signIn);

	// '/signOut'
	app.post('/signOut', userController.signOut);

	app.get('/isLoggedIn', userController.isLoggedIn);
	
	// '/signedIn'
	app.get('/getSignedInUser', userController.getSignedInUser);
};