import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Banner from './Banner';
import Nav from './Nav';
import Resources from './Resources';

import './App.css';

import data from './data';
import undraw from './undraw-designer.png';

class App extends Component {
	static defaultProps = { data };

	render() {
		return (
			<div className="App">
				<Banner />
				<header className="App-header">
					<img className="App-icon" alt="site icon" src={undraw} />
					<h1 className="App-heading">Front-end Resources</h1>
					<p className="App-subheading">
						A curated collection of useful tools and websites for front-end web
						developers.
					</p>
					<div className="App-button-container">
						<a
							className="github-button App-star-button"
							href="https://github.com/vlipatdev/frontend-resources"
							data-icon="octicon-star"
							data-size="large"
							data-show-count="true"
							aria-label="Star vlipatdev/frontend-resources on GitHub"
						>
							Star
						</a>
						<div className="App-button-divider" />
						<a
							class="github-button App-fork-button"
							href="https://github.com/vlipatdev/frontend-resources/fork"
							data-icon="octicon-repo-forked"
							data-size="large"
							data-show-count="true"
							aria-label="Fork vlipatdev/frontend-resources on GitHub"
						>
							Fork
						</a>
					</div>

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
						Made by <a href="https://github.com/vlipatdev">Val Lipat</a> with{' '}
						<span role="img" aria-label="red heart emoji">
							❤️
						</span>
					</p>
				</footer>
			</div>
		);
	}
}

export default App;
