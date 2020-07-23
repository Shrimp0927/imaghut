const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/dev');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	User.findById(id).then((user) => {
		done(null, user);
	});
});

passport.use(
	new FacebookStrategy(
		{
			clientID: keys.clientID,
			clientSecret: keys.clientSecret,
			callbackURL: '/auth/facebook/callback',
		},
		async (accessToken, refreshToken, profile, done) => {
			const existingUser = await User.findOne({ facebookId: profile.id });

			if (existingUser) {
				done(null, existingUser);
			} else {
				const user = await new User({ facebookId: profile.id }).save();

				done(null, user);
			}
		}
	)
);
