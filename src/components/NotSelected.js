import React, { Component } from 'react';

import './NotSelected.css';

import { Header, Icon } from 'semantic-ui-react';

class NotSelected extends Component {

	render() {
		return (
			<div className="not-selected">
				<Header as='h2' icon textAlign='center'>
			      <Icon name='users' circular />
			      <Header.Content>No select contact</Header.Content>
			    </Header>
			</div>
		);
	}

}

export default NotSelected;