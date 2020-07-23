import React, { Component } from 'react';

class Header extends Component {
	render() {
		const logoURL =
			'https://vignette.wikia.nocookie.net/minecraft/images/e/ea/Painting.png/revision/latest?cb=20190911215718';

		return (
			<div>
				<nav>
					<div className="nav-wrapper">
						<a href="/" className="brand-logo">
							Imaghut
                            <img src={logoURL} height="50px" />
						</a>
						<ul className="right hide-on-med-and-down">
							<li>
								<a href="/auth/facebook">Login with Facebook</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}

export default Header;
