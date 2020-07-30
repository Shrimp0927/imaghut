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
			_userFullName: req.user.fullName,
			datePosted: Date.now(),
		});

		await post.save();
		res.send({});
	});

	app.post('/api/posts/like', requireLogin, async (req, res) => {
		const filter = {
			_id: req.body.surveyId,
			'usersLike.user': { $nin: [req.user] },
		};
		const update = {
			$push: { usersLike: { user: req.user } },
			$inc: { likes: 1 },
		};

		await Post.findOneAndUpdate(filter, update, {
			new: true,
			useFindAndModify: false,
		});
		res.redirect('/posts');
	});

	app.get('/api/posts', requireLogin, async (req, res) => {
		let posts = [];

		for (let i = 0; i < req.user.following.length; i++) {
			posts.push(await Post.find({ _user: req.user.following[i].user }));
		}

		res.send(posts);
	});

	app.get('/api/posts/user', requireLogin, async (req, res) => {
		const posts = await Post.find({ _user: req.user._id });

		res.send(posts);
	});
};
