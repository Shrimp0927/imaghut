import React, { Component, Fragment } from 'react';
import axios from 'axios';

class SearchBar extends Component {
	state = {
		input: null,
	};

	inputChangeHandler = (event) => {
		this.setState({ input: event.target.value });
	};

	onFollowHandler = () => {
		axios
			.post('/api/users/follow', { followingUserId: this.state.input })
			.then((res) => {
				if (res) {
					document.getElementById('users-search').reset();
				}
			});
	};

	render() {
		return (
			<Fragment>
				<li style={{ marginRight: '5px' }}>
					<form id="users-search">
						<input
							type="text"
							placeholder="input userId"
							onChange={this.inputChangeHandler}
						></input>
					</form>
				</li>
				<li>
					<button
						style={{ marginRight: '6rem' }}
						className="btn-small"
						onClick={this.onFollowHandler}
					>
						Follow
					</button>
				</li>
			</Fragment>
		);
	}
}

export default SearchBar;
