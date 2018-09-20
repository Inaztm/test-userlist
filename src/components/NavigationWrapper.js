import React, { Component } from 'react';

import './NavigationWrapper.css';

class NavigationWrapper extends Component {

	render() {
		return (
			<div className="navigation-wrapper">
				{this.props.children}
			</div>
		);
	}

}

export default NavigationWrapper;
