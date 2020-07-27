const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
	_user: { type: Schema.Types.ObjectId, ref: 'User' },
	datePosted: Date,
	body: String,
	images: {
		data: Buffer,
		type: String,
	},
	likes: { type: Number, default: 0 },
	usersLike: [{ user: { type: Schema.Types.ObjectId, ref: 'User' } }],
});

mongoose.model('posts', postSchema);
