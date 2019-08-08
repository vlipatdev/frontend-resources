import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Card from './Card';
import './Resources.css';

class Resources extends Component {
	render() {
		const idx = this.props.data.findIndex(
			(el) => el.type.toLowerCase() === this.props.match.params.name
		);

		if (idx === -1) {
			return <Redirect to="/html" />;
		} else {
			return (
				<div className="Resources">
					<h2 className="Resources-heading">{this.props.match.params.name}</h2>
					<div className="Resources-card-container">
						{this.props.data[idx].resources.map((el) => (
							<Card
								title={el.title}
								description={el.description}
								link={el.link}
								labels={el.labels}
							/>
						))}
						<i className="Resources-filler" aria-hidden="true" />
						<i className="Resources-filler" aria-hidden="true" />
						<i className="Resources-filler" aria-hidden="true" />
						<i className="Resources-filler" aria-hidden="true" />
						<i className="Resources-filler" aria-hidden="true" />
					</div>
				</div>
			);
		}
	}
}

export default Resources;
