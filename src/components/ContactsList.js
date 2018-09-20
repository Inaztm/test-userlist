import React, { Component } from 'react';

import './ContactsList.css';

import { Image, List, Header } from 'semantic-ui-react';

class ContactsList extends Component {

	render() {
		const { contacts } = this.props;

		return (
			<div className="scroll">
				<List>
				    {contacts.map((contact) =>
				    	<List.Item
				    		key={contact.general.firstName + '_' + contact.general.lastName}>
						    <Image avatar src='/images/avatar/small/helen.jpg' />
						    <List.Content>
						        <List.Header>{contact.general.firstName}</List.Header>
						        An excellent companion
						    </List.Content>
					    </List.Item>
					)}
				</List>
			</div>
		)
	}

}

export default ContactsList;
