import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import * as actions from '../../actions/index';

class MyPosts extends Component {
	componentDidMount() {
		this.props.fetchPosts();
	}

	onLikeHandler = (surveyId) => {
		axios.post('/api/posts/like', { surveyId: surveyId }).then((res) => {
			console.log(res);
		});
	};

	renderPosts = () => {
		if (this.props.userPosts) {
			return this.props.userPosts.reverse().map((post) => {
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
		return (
			<div>
				My profile
				<div>{this.renderPosts()}</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		userFullName: state.auth.userFullName,
		userPosts: state.posts.userPosts,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchPosts: () => dispatch(actions.fetchPosts()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);
