import React, { Component } from 'react';

import './ContactsList.css';

import { Image, List } from 'semantic-ui-react';

import formatName from '../helpers/formatName.js';

class ContactsList extends Component {

	render() {
		const { contacts, selectedContact, selectContact } = this.props;

		const imageStyles = { marginLeft: '5px' }
		const containerStyles = { margin: '5px 0' }

		return (
			<div className="scroll" style={containerStyles}>
				<List divided>
				    {contacts.map(contact =>
				    	<List.Item
				    		onClick={(e) => selectContact(contact)}
				    		key={formatName(contact.general.firstName, contact.general.lastName, '_')}
				    		active={selectedContact === contact}>
						    <Image
						    	width="45px"
						    	height="45px"
						    	style={imageStyles}
						    	rounded
						    	src={contact.general.avatar} />
						    <List.Content>
						        <List.Header>{formatName(contact.general.firstName, contact.general.lastName, ' ')}</List.Header>
						        <span>{contact.job.title}</span>
						    </List.Content>
					    </List.Item>
					)}
				</List>
			</div>
		)
	}

}

export default ContactsList;
