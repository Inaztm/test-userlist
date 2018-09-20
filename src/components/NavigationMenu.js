import React, { Component } from 'react';

import './NavigationMenu.css';

class NavigationMenu extends Component {

	render() {
		return (
			<nav className="navigation-menu">
				{this.props.children}
			</nav>
		)
	}

}

export default NavigationMenu;

