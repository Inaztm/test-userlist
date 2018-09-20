import React, { Component } from 'react';

import { Image, Grid, Header, List, Divider, Segment, Label } from 'semantic-ui-react';

import formatName from '../helpers/formatName.js';

class ContactDetail extends Component {

	render() {
		const { contact } = this.props;
		const { general, job, address } = contact;

		const containerStyles = { margin: '5px 0' }

		return (
			<Grid container padded>
			    <Grid.Column width={4}>
			    	<Image src={general.avatar} size="large" rounded />
			    </Grid.Column>
			    <Grid.Column width={12}>
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
						      {contact.contact.email}
						    </List.Item>
						    <List.Item>
						      <Label color='red' horizontal>Phone</Label>
						      {contact.contact.phone}
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

export default ContactDetail;
