import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './Nav.css';

class Nav extends Component {
	render() {
		return (
			<div className="Nav">
				{this.props.data.map((el, idx) => (
					<NavLink
						key={idx}
						className="Nav-navlink"
						exact
						to={`/${el.type.toLowerCase()}`}
						activeClassName="active"
					>
						{el.type}
					</NavLink>
				))}
			</div>
		);
	}
}

export default Nav;
