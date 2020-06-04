import React, { Component } from 'react';

import './Banner.css';

class Banner extends Component {
	render() {
		return (
			<div className="Banner">
				<p className="Banner-text">
					Check out my first React Native project! <span> 🔬 </span>
					<a
						className="Banner-link"
						href="https://play.google.com/store/apps/details?id=com.iridiumlab.sciencenews"
					>
						Science News
					</a>
				</p>
			</div>
		);
	}
}

export default Banner;
