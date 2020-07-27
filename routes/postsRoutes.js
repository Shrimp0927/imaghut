const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Post = mongoose.model('posts');

module.exports = (app) => {
	app.post('/api/newpost', requireLogin, async (req, res) => {
		const { body, images } = req.body;

		const post = new Post({
			body: body,
			images: images,
			_user: req.user.id,
			datePosted: Date.now(),
		});

		await post.save();
		res.send({});
	});

	app.post('/api/posts/like', requireLogin, async (req, res) => {
		const filter = {
			_id: req.body.surveyId,
			usersLike: { $ne: req.user.id },
		};
		const update = {
			$push: { usersLike: { user: req.user.id } },
			$inc: { likes: 1 },
		};

		await Post.findOneAndUpdate(filter, update, { new: true });
		res.redirect('/posts');
	});

	app.get('/api/posts', requireLogin, async (req, res) => {
		const posts = await Post.find({ _user: req.user.id });

		res.send(posts);
	});
};
