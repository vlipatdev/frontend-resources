import React, { Component } from 'react';

import '../styles/Label.css';

class Label extends Component {
	render() {
		return <div className={`Label ${this.props.label}`}>{this.props.label}</div>;
	}
}

export default Label;
