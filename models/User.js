const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	googleId: String,
	fullName: String,
	following: [{ user: { type: Schema.Types.ObjectId, ref: 'User' } }],
	followers: [{ user: { type: Schema.Types.ObjectId, ref: 'User' } }],
});

mongoose.model('users', userSchema);
