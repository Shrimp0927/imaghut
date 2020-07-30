import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import * as actions from '../../actions/index';

class MyPosts extends Component {
	componentDidMount() {
		this.props.fetchUserPosts();
	}

	onLikeHandler = (surveyId) => {
		axios.post('/api/posts/like', { surveyId: surveyId }).then((res) => {
			console.log(res);
		});
	};

	renderPosts = () => {
		console.log(this.props.userPosts);
		if (this.props.userPosts) {
			return this.props.userPosts.map((post) => {
				return (
					<div key={post._id} className="card darken-3">
						<div className="card-content">
							<span className="card-title">{this.props.userFullName}</span>
							<img alt={post._id} src={post.images} />
							<p>{post.body}</p>
						</div>
						<div className="card-action">
							<a href="#" onClick={() => this.onLikeHandler(post._id)}>
								Likes: {post.likes}
							</a>
							<a href="#">{new Date(post.datePosted).toLocaleDateString()}</a>
						</div>
					</div>
				);
			});
		}
	};

	render() {
		let userId;
		let userFollowers;
		let userFollowing;

		if (this.props.userLogin) {
			userId = this.props.userLogin;
			userFollowers = this.props.userFollowers;
			userFollowing = this.props.userFollowing;
		}

		return (
			<div>
				<div>
					<h1>{this.props.userFullName}</h1>
					<p>userId: {userId}</p>
					<p>Followers: {userFollowers ? userFollowers.length : 0}</p>
					<p>Following: {userFollowing ? userFollowing.length : 0}</p>
				</div>
				<div>{this.renderPosts()}</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		userFullName: state.user.userFullName,
		userPosts: state.posts.userPosts,
		userLogin: state.auth.userLogin,
		userFollowers: state.user.userFollowers,
		userFollowing: state.user.userFollowing,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchUserPosts: () => dispatch(actions.fetchUserPosts()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);
