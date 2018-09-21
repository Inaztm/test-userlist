import _ from 'lodash';

import React, { Component } from 'react';

import { Image, Grid, Container, Button, Header, List, Divider, Segment, Label } from 'semantic-ui-react';

import NotSelected from '../components/NotSelected';

import formatName from '../helpers/formatName.js';

const imageContainerStyles = {
	display: 'flex',
	justifyContent: 'center'
}

class ContactDetail extends Component {

	render() {
		const { selectedContact } = this.props;

		if (_.isEmpty(selectedContact)) {
			return (
				<NotSelected />
			)
		} else {
			const { general, job, address, contact } = selectedContact;

			return (
				<Grid container padded>
					<Grid.Column width={16}>
						<Button
							onClick={e => this.props.deselectContact()}
							icon='left chevron'
							content='Back' />
					</Grid.Column>
				    <Grid.Column width={3}>
				    	<div style={imageContainerStyles}>
					    	<Image
					    		src={general.avatar}
					    		width="128"
					    		height="128"
					    		rounded />
					    </div>
				    </Grid.Column>

				    <Grid.Column width={13}>
				    	<Header as="h1">
				    		{formatName(general.firstName, general.lastName, ' ')}
				    	</Header>

				    	<Divider fitted />

				    	<Segment raised color='green'>
					        <Label as='span' color='green' ribbon>Job</Label>

					        <List divided>
							    <List.Item>
							      <Label color='green' horizontal>Position</Label>
							      {job.title}
							    </List.Item>

							    <List.Item>
							      <Label color='green' horizontal>Company</Label>
							      {job.company}
							    </List.Item>
							</List>
					    </Segment>

					    <Segment raised>
					        <Label as='span' color='red' ribbon>Contacts</Label>

					        <List divided>
							    <List.Item>
							      <Label color='red' horizontal>Email</Label>
							      {contact.email}
							    </List.Item>

							    <List.Item>
							      <Label color='red' horizontal>Phone</Label>
							      {contact.phone}
							    </List.Item>
							</List>
					    </Segment>

				    	<Segment raised>
					        <Label as='span' color='orange' ribbon>Address</Label>

					        <List divided>
					        	<List.Item>
							    	<Label color='orange' horizontal>Country</Label>
							      {address.country}
							    </List.Item>

							    <List.Item>
							      <Label color='orange' horizontal>City</Label>
							      {address.city}
							    </List.Item>

							    <List.Item>
							      <Label color='orange' horizontal>Street</Label>
							      {address.street}
							    </List.Item>

							    <List.Item>
							      <Label color='orange' horizontal>Zip code</Label>
							      {address.zipCode}
							    </List.Item>
							</List>
					    </Segment>
				    </Grid.Column>
				</Grid>
			)
		}
	}

}

export default ContactDetail;
