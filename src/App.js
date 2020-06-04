import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Banner from './Banner';
import Nav from './Nav';
import Resources from './Resources';

import data from './data';
import undraw from './undraw-to-the-moon.png';
import './App.css';

class App extends Component {
	static defaultProps = { data };

	render() {
		return (
			<div className="App">
				<Banner />
				<header className="App-header">
					<img className="App-logo" alt="site logo" src={undraw} />
					<h1 className="App-heading">Front-end Resources</h1>
					<p className="App-subheading">
						A curated collection of useful tools and websites for front-end web
						developers.
					</p>
					<a
						className="github-button"
						href="https://github.com/vlipatdev/frontend-resources"
						data-icon="octicon-star"
						data-size="small"
						data-show-count="true"
						aria-label="Star vlipatdev/frontend-resources on GitHub"
					>
						Star
					</a>
					<Nav data={this.props.data} />
				</header>
				<Route
					exact
					path="/:name"
					render={(routeProps) => (
						<Resources {...routeProps} data={this.props.data} />
					)}
				/>
				<footer className="App-footer">
					<p>
						by <a href="https://github.com/vlipatdev">Val Lipat</a> with{' '}
						<span role="img" aria-label="red heart emoji">
							❤️
						</span>
					</p>
				</footer>{' '}
			</div>
		);
	}
}

export default App;
