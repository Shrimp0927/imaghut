import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import SearchBar from './users/SearchBar';

class Header extends Component {
	newPostRedirect = () => {
		this.props.history.push('/posts/new');
	};

	renderContent = () => {
		if (this.props.userLogin) {
			return (
				<Fragment>
					<SearchBar />
					<li>
						<button className="btn" onClick={this.newPostRedirect}>
							New Post
						</button>
					</li>
					<li>
						<NavLink to="/posts">{this.props.userFullName}</NavLink>
					</li>
					<li>
						<a href="/api/logout">Logout</a>
					</li>
				</Fragment>
			);
		}
		return (
			<li>
				<a href="/auth/facebook">Login with Facebook</a>
			</li>
		);
	};

	render() {
		return (
			<nav>
				<div className="nav-wrapper">
					<NavLink
						to={this.props.userLogin ? '/feed' : '/'}
						className="brand-logo"
					>
						Imaghut
					</NavLink>
					<ul className="right hide-on-med-and-down">{this.renderContent()}</ul>
				</div>
			</nav>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		userLogin: state.auth.userLogin,
		userFullName: state.user.userFullName,
	};
};

export default connect(mapStateToProps)(withRouter(Header));
