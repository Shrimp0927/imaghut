import React, { Component, Fragment } from 'react';
import axios from 'axios';

class NewPost extends Component {
	state = {
		images: String,
		body: String,
	};

	textChangeHandler = (event) => {
		this.setState({
			body: event.target.value,
		});
	};

	fileSelectHandler = (event) => {
		const reader = new FileReader();

		reader.readAsDataURL(event.target.files[0]);

		reader.onload = (e) => {
			this.setState({
				images: e.target.result,
			});
		};
	};

	postUploadHandler = () => {
		axios.post('/api/newpost', this.state).then((res) => {
			console.log(res);
		});
		this.props.history.push('/feed');
	};

	render() {
		return (
			<Fragment>
				<input
					type="text"
					onChange={this.textChangeHandler}
					placeholder="Write a caption for your post"
				/>
				<input type="file" onChange={this.fileSelectHandler} />
				<button onClick={this.postUploadHandler}>Upload Post</button>
			</Fragment>
		);
	}
}

export default NewPost;
