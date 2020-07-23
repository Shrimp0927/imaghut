const passport = require('passport');

module.exports = (app) => {
	app.get('/auth/facebook', passport.authenticate('facebook'));

	app.get(
		'/auth/facebook/callback',
		passport.authenticate('facebook'),
		(req, res) => {
			if (req.user || req.session.user) {
				res.status(301).redirect('/dashboard')
			}
		}
	);

	app.get('/api/logout', (req, res) => {
		req.logout();
		res.redirect('/');
	});

	app.get('/api/current_user', (req, res) => {
		res.send(req.user);
	});
};
