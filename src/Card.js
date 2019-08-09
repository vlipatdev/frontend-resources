import React, { Component } from 'react';
import Label from './Label';
import './Card.css';

class Card extends Component {
	render() {
		return (
			<a className="Card" href={this.props.link}>
				<h3 className="Card-title">{this.props.title}</h3>
				<p className="Card-description">{this.props.description}</p>
				<div className="Card-label-container">
					{this.props.labels.map((label, idx) => (
						<Label key={idx} label={label} />
					))}
				</div>
			</a>
		);
	}
}

export default Card;
