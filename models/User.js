const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	facebookId: String,
	fullName: String,
});

mongoose.model('users', userSchema);
