import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../actions/index';
import Header from './Header';
import Landing from './Landing';
import Feed from './posts/Feed';
import NewPost from './posts/NewPost';
import MyProfile from './posts/MyProfile';

class App extends Component {
	componentDidMount() {
		this.props.fetchUsers();
	}

	render() {
		return (
			<div className="container">
				<Header />
				<Route path="/" exact component={Landing} />
				<Route path="/feed" component={Feed} />
				<Route path="/posts" exact component={MyProfile} />
				<Route path="/posts/new" component={NewPost} />
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchUsers: () => dispatch(actions.fetchUsers()),
	};
};

export default connect(null, mapDispatchToProps)(App);
