import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import Resources from './Resources';

import undraw from './undraw-to-the-moon.png';
import './App.css';

class App extends Component {
	static defaultProps = {
		data: [
			{
				type: 'HTML',
				resources: [
					{
						title: 'W3C Markup Validator',
						description: 'HTML validator',
						link: 'https://validator.w3.org/',
						labels: ['free']
					},
					{
						title: 'Meta Tags Generator',
						description: 'Preview, edit, and generate meta tags',
						link: 'https://metatags.io/',
						labels: ['free']
					},
					{
						title: 'Favicon Generator',
						description: 'Favicon generator',
						link: 'https://www.favicon-generator.org/',
						labels: ['free']
					}
				]
			},
			{
				type: 'CSS',
				resources: [
					{
						title: 'W3C CSS Validator',
						description: 'CSS Validator',
						link: 'https://jigsaw.w3.org/css-validator/',
						labels: ['free']
					},
					{
						title: 'SpinKit',
						description: 'Simple CSS spinners',
						link: 'https://tobiasahlin.com/spinkit/',
						labels: ['free']
					},
					{
						title: 'Hamburgers by Jonathan Suh',
						description: 'CSS-animated hamburgers',
						link: 'https://jonsuh.com/hamburgers/',
						labels: ['free']
					},
					{
						title: 'CSSeffectsSnippets',
						description: 'CSS effects snippets',
						link: 'https://emilkowalski.github.io/css-effects-snippets/',
						labels: ['free']
					},
					{
						title: 'Autoprefixer CSS online',
						description: 'Online CSS autoprefixer',
						link: 'https://autoprefixer.github.io/',
						labels: ['free']
					},
					{
						title: 'CSS Minifier',
						description: 'Online CSS minifier',
						link: 'https://cssminifier.com/',
						labels: ['free']
					}
				]
			},
			{
				type: 'Icons',
				resources: [
					{
						title: 'LineIcons',
						description: '450+ free line icons for designers and developers',
						link: 'https://lineicons.com/',
						labels: ['free']
					},
					{
						title: 'Feather',
						description: 'Simply beautiful open-source icons',
						link: 'https://feathericons.com/',
						labels: ['free']
					},
					{
						title: 'Ionicons',
						description: 'Beautifully crafted open-source icons',
						link: 'https://ionicons.com/',
						labels: ['free']
					},
					{
						title: 'IcoMoon',
						description: '5500+ vector icons',
						link: 'https://icomoon.io/',
						labels: ['free']
					},
					{
						title: 'Xicons',
						description: 'Free vector icons',
						link: 'https://www.xicons.co/',
						labels: ['free']
					},
					{
						title: 'IconStore',
						description: 'Free icons by first-class designers',
						link: 'https://iconstore.co/',
						labels: ['free']
					},
					{
						title: 'Simple Icons',
						description: 'Brand icons',
						link: 'https://simpleicons.org/',
						labels: ['free']
					}
				]
			},
			{
				type: 'Illustrations',
				resources: [
					{
						title: 'Undraw',
						description: '400+ customizable open-source illustrations',
						link: 'https://undraw.co/illustrations',
						labels: ['free']
					},
					{
						title: 'manypixels',
						description: 'Royalty-free illustrations',
						link: 'https://gallery.manypixels.co/',
						labels: ['free']
					},
					{
						title: 'IRA Design',
						description: 'Build your own amazing illustrations',
						link: 'https://iradesign.io/',
						labels: ['free']
					},
					{
						title: 'Free Illustrations by Lukasz Adam',
						description: 'Free illustrations',
						link: 'https://lukaszadam.com/illustrations',
						labels: ['free']
					}
				]
			},
			{
				type: 'Colors',
				resources: [
					{
						title: 'Color Space',
						description: 'Enter a color and generate nice color palettes',
						link: 'https://mycolor.space/',
						labels: ['free']
					},
					{
						title: 'Coolors',
						description: 'Color palette generator',
						link: 'https://coolors.co/app',
						labels: ['free']
					},
					{
						title: 'Flat UI Colors 2',
						description: 'Flat UI colors',
						link: 'https://flatuicolors.com/',
						labels: ['free']
					},
					{
						title: 'Material Design Colors',
						description: 'Material design colors',
						link: 'https://www.materialui.co/colors',
						labels: ['free']
					},
					{
						title: 'Web Gradients',
						description: 'Fresh background gradients',
						link: 'https://webgradients.com/',
						labels: ['free']
					},
					{
						title: 'uiGradients',
						description: 'Beautiful colored gradients',
						link: 'http://www.uigradients.com/',
						labels: ['free']
					}
				]
			},
			{
				type: 'Images',
				resources: [
					{
						title: 'Unsplash',
						description: 'The internet’s source of freely useable images',
						link: 'https://unsplash.com/',
						labels: ['free']
					},
					{
						title: 'Pexels',
						description:
							'The best free stock photos & videos shared by talented creators',
						link: 'https://www.pexels.com/',
						labels: ['free']
					},
					{
						title: 'Online Image Compressor',
						description: 'Compress up to 20 images at a time',
						link: 'https://imagecompressor.com/',
						labels: ['free']
					},
					{
						title: 'ImageResizer',
						description: 'Resize and optimize images',
						link: 'https://imageresizer.org/',
						labels: ['free']
					}
				]
			},
			{
				type: 'JavaScript',
				resources: [
					{
						title: 'JavaScript 30',
						description: 'Build 30 things with pure JavaScript',
						link: 'https://javascript30.com/',
						labels: ['free']
					},
					{
						title: 'Codewars',
						description: 'Solve JavaScript challenges and learn from others',
						link: 'https://www.codewars.com/',
						labels: ['free']
					},
					{
						title: 'ValidateJavaScript',
						description: 'JavaScript validator built using ESLint',
						link: 'https://validatejavascript.com/',
						labels: ['free']
					}
				]
			},
			{
				type: 'Repositories',
				resources: [
					{
						title: 'Developer Roadmap',
						description: '',
						link: 'https://github.com/kamranahmedse/developer-roadmap',
						labels: ['free']
					},
					{
						title: 'Awesome Design Tools',
						description: '',
						link: 'https://github.com/LisaDziuba/Awesome-Design-Tools',
						labels: ['free']
					},
					{
						title: 'Front-end Developer Interview Questions',
						description: '',
						link:
							'https://github.com/h5bp/Front-end-Developer-Interview-Questions',
						labels: ['free']
					},
					{
						title: 'Front-end Checklist',
						description: '',
						link: 'https://github.com/thedaviddias/Front-End-Checklist',
						labels: ['free']
					},
					{
						title: 'Front-end Performance Checklist',
						description: '',
						link:
							'https://github.com/thedaviddias/Front-End-Performance-Checklist',
						labels: ['free']
					},
					{
						title: '30 Seconds of CSS',
						description: '',
						link: 'https://github.com/30-seconds/30-seconds-of-css',
						labels: ['free']
					}
				]
			},
			{
				type: 'Courses',
				resources: [
					{
						title: 'Web Accessibility by Google',
						description: '',
						link: 'https://classroom.udacity.com/courses/ud891',
						labels: ['free']
					},
					{
						title: "CS50's Introduction to Computer Science",
						description: '',
						link:
							'https://www.edx.org/course/cs50s-introduction-to-computer-science',
						labels: ['free']
					},
					{
						title: "CS50's Web Programming with Python and JavaScript",
						description: '',
						link:
							'https://www.edx.org/course/cs50s-web-programming-with-python-and-javascript',
						labels: ['free']
					}
				]
			},
			{
				type: 'Readings',
				resources: [
					{
						title: 'Front-end Handbook 2019',
						description: '',
						link: 'https://frontendmasters.com/books/front-end-handbook/2019/',
						labels: ['free']
					},
					{
						title: 'HackerRank 2019 Developer Skills Report',
						description: '',
						link: 'https://research.hackerrank.com/developer-skills/2019',
						labels: ['free']
					},
					{
						title: 'HTML & CSS',
						description: '',
						link: 'http://www.htmlandcssbook.com/',
						labels: ['premium']
					},
					{
						title: 'Refactoring UI',
						description: '',
						link: 'https://refactoringui.com/book/',
						labels: ['premium']
					},
					{
						title: "You Don't Know JS",
						description: '',
						link: 'https://github.com/getify/You-Dont-Know-JS',
						labels: ['free']
					},
					{
						title: 'Eloquent JavaScript',
						description: '',
						link: 'https://eloquentjavascript.net/',
						labels: ['free']
					},
					{
						title: 'Learning JavaScript Design Patterns',
						description: '',
						link:
							'https://addyosmani.com/resources/essentialjsdesignpatterns/book/',
						labels: ['free']
					},
					{
						title: 'Web Content Accessibility Guidelines (WCAG) 2.1',
						description: '',
						link: 'https://www.w3.org/TR/WCAG21/',
						labels: ['free']
					}
				]
			},
			{
				type: 'General',
				resources: [
					{
						title: 'Trello',
						description:
							'Easy, free, flexible, and visual way to manage your projects and organize anything',
						link: 'https://trello.com/',
						labels: ['free']
					},
					{
						title: 'Google Analytics',
						description: 'Web analytics service offered by Google',
						link: 'https://analytics.google.com/analytics/web/',
						labels: ['free']
					},
					{
						title: 'Adobe XD',
						description: 'Beginner-friendly prototyping software from Adobe',
						link: 'https://www.adobe.com/products/xd.html',
						labels: ['free']
					},
					{
						title: 'Wireframe.cc',
						description: 'Minimal wireframing tool',
						link: 'https://wireframe.cc/',
						labels: ['free']
					},
					{
						title: 'Blobmaker',
						description: 'Online SVG blob maker',
						link: 'https://www.blobmaker.app/',
						labels: ['free']
					},
					{
						title: 'Sizzy',
						description: 'Browser made for responsive design',
						link: 'https://sizzy.co/',
						labels: ['premium']
					},
					{
						title: 'Screenfly',
						description: 'Test your website at different screen resolutions',
						link: 'http://quirktools.com/screenfly/',
						labels: ['free']
					},
					{
						title: 'web.dev',
						description: 'See how well your website performs; uses Lighthouse',
						link: 'https://web.dev/',
						labels: ['free']
					},
					{
						title: 'GTmetrix',
						description: "Tool that analyzes your page's speed performance",
						link: 'https://gtmetrix.com/',
						labels: ['free']
					},
					{
						title: 'Can I Use',
						description: 'Support tables for HTML, CSS, etc',
						link: 'https://caniuse.com/',
						labels: ['free']
					},
					{
						title: 'Carbon',
						description:
							'Create and share beautiful images of your source code',
						link: 'https://carbon.now.sh/',
						labels: ['free']
					},
					{
						title: 'Wappalyzer',
						description: 'Identify technologies on websites',
						link: 'https://www.wappalyzer.com/',
						labels: ['free']
					}
				]
			},
			{
				type: 'Deployment',
				resources: [
					{
						title: 'GitHub Pages',
						description: 'Free web hosting service by GitHub',
						link: 'https://pages.github.com/',
						labels: ['free']
					},
					{
						title: 'Netlify',
						description: 'Deploy your site in 30 seconds',
						link: 'https://www.netlify.com/',
						labels: ['free']
					},
					{
						title: 'Surge',
						description: 'Simple, single-command web publishing',
						link: 'https://surge.sh/',
						labels: ['free']
					},
					{
						title: 'Google Domains',
						description: 'Find a domain, create a site, and get custom email',
						link: 'https://domains.google/',
						labels: ['premium']
					},
					{
						title: 'namecheap',
						description: 'Cheap domain names',
						link: 'https://www.namecheap.com/',
						labels: ['premium']
					}
				]
			},
			{
				type: 'Accessibility',
				resources: [
					{
						title: 'NV Access',
						description: 'Screen reader for Microsoft Windows',
						link: 'https://www.nvaccess.org/',
						labels: ['free']
					},
					{
						title: 'ChromeVox Chrome Extension',
						description: 'Screen reader by Google',
						link:
							'https://chrome.google.com/webstore/detail/chromevox/kgejglhpjiefppelpmljglcjbhoiplfn?hl=en',
						labels: ['free']
					},
					{
						title: 'axe Chrome Extension',
						description: 'Accessibility testing in Chrome Developer Tools',
						link:
							'https://chrome.google.com/webstore/detail/axe/lhdoppojpmngadmnindnejefpokejbdd',
						labels: ['free']
					}
				]
			},
			{
				type: 'YouTube',
				resources: [
					{
						title: 'Google Chrome Developers',
						description: '',
						link: 'https://www.youtube.com/user/ChromeDevelopers',
						labels: ['free']
					},
					{
						title: 'W3C Web Accessibility Initiative',
						description: '',
						link: 'https://www.youtube.com/channel/UCU6ljj3m1fglIPjSjs2DpRA',
						labels: ['free']
					},
					{
						title: 'Brad Traversy',
						description: '',
						link: 'https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA',
						labels: ['free']
					},
					{
						title: 'Colt Steele',
						description: '',
						link: 'https://www.youtube.com/channel/UCrqAGUPPMOdo0jfQ6grikZw',
						labels: ['free']
					},
					{
						title: 'Academind',
						description: '',
						link: 'https://www.youtube.com/channel/UCSJbGtTlrDami-tDGPUV9-w',
						labels: ['free']
					},
					{
						title: 'Net Ninja',
						description: '',
						link: 'https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg',
						labels: ['free']
					},
					{
						title: 'mayuko',
						description: '',
						link: 'https://www.youtube.com/user/hellomayuko ',
						labels: ['free']
					}
				]
			}
		]
	};
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img className="App-logo" src={undraw} />
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
					<div className="App-nav">
						{this.props.data.map((el) => (
							<NavLink
								className="App-navlink"
								exact
								to={`/${el.type.toLowerCase()}`}
								activeClassName="active"
							>
								{el.type}
							</NavLink>
						))}
					</div>
				</header>
				<Route
					exact
					path="/:name"
					render={(routeProps) => (
						<Resources {...routeProps} data={this.props.data} />
					)}
				/>
				<footer className="App-footer">
					<p>Made with ❤️ by <a href="https://github.com/vlipatdev">Val Lipat</a></p>
				</footer>
			</div>
		);
	}
}

export default App;
