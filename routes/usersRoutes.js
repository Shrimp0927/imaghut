const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const User = mongoose.model('users');

module.exports = (app) => {
	app.post('/api/users/follow', requireLogin, async (req, res) => {
		const userFilter = {
			_id: req.user._id,
			'following.user': { $nin: [req.body.followingUserId] },
		};

		const userUpdate = {
			$push: { following: { user: req.body.followingUserId } },
		};

		const followingUserFilter = {
			_id: req.body.followingUserId,
			'followers.user': { $nin: [req.user._id] },
		};

		const followingUserUpdate = {
			$push: { followers: { user: req.user._id } },
		};

		const user = await User.findOneAndUpdate(userFilter, userUpdate, {
			new: true,
			useFindAndModify: false,
		});

		const followingUser = await User.findOneAndUpdate(
			followingUserFilter,
			followingUserUpdate,
			{ new: true, useFindAndModify: false }
		);

		res.send({
			followingUserName: followingUser.fullName,
			followingUserId: followingUser._id,
		});
	});
};
