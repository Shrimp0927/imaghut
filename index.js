const express = require('express');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const keys = require('./config/dev');
require('./models/User');
require('./models/Post');
require('./services/passport');

mongoose.connect(
	'mongodb+srv://admin:Password@testing.qdfaf.mongodb.net/db?retryWrites=true&w=majority',
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	}
);

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [keys.cookieKey],
	})
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/postsRoutes')(app);
require('./routes/usersRoutes')(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT);
