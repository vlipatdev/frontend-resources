import React, { Component } from 'react';

import './Banner.css';

class Banner extends Component {
	render() {
		return (
			<div className="Banner">
				<p className="Banner-text">
					If you liked this list, you can support me by downloading my first
					React Native app:
					{'  '}
					<a
						className="Banner-link"
						href="https://play.google.com/store/apps/details?id=com.iridiumlab.sciencenews"
					>
						⚛ Science News
					</a>
					. Thank you!
				</p>
			</div>
		);
	}
}

export default Banner;
