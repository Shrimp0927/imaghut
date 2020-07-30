import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import _ from 'lodash';

import * as actions from '../../actions/index';

class Feed extends Component {
	componentDidMount() {
		this.props.fetchPosts();
	}

	onLikeHandler = (surveyId) => {
		axios.post('/api/posts/like', { surveyId: surveyId }).then((res) => {
			console.log(res);
		});
	};

	renderPosts = () => {
		if (this.props.posts) {
			return _.flatMapDeep(this.props.posts, (arr) => {
				return _.map(arr, (post) => {
					return (
						<div key={post._id} className="card darken-3">
							<div className="card-content">
								<span className="card-title">{post._userFullName}</span>
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
			});
		}
	};

	render() {
		return (
			<div className="containter">
				<h1>Feed</h1>
				<div>{this.renderPosts()}</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		posts: state.posts.posts,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchPosts: () => dispatch(actions.fetchPosts()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
