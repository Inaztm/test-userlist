import _ from 'lodash';
import formatName from './formatName.js'

export default filter => {

	return _.map(filter, result => {
		const { general, job } = result
	    let title = formatName(general.firstName, general.lastName, ' ');

	    return {
	    	title,
	    	description: job.title,
	    	contact: result
	    };
	})

}