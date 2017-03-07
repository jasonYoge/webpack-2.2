import React, { Component } from 'react';
require('./Root.scss');

export default class Root extends Component {
	constructor(props) {
		super(props);
		this.state = {
			child: <div>1234565</div>
		}
		this.handleClick = this.handleClick.bind(this);
	}

	render() {
		return <div className="root" onClick={this.handleClick}>
				{ this.state.child }
			</div>
	}

	handleClick () {
		System.import('./Export.jsx').then(Export => {
			console.log('this happened!');
		}).catch(err => {
			console.log(err);
		});
	}
}