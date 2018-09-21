import _ from 'lodash';

import React, { Component } from 'react';

import { Search } from 'semantic-ui-react';

class SearchContacts extends Component {

    handleSearchChange = (e, { value }) => this.props.setKeyword(value)

    render() {
        const { keyword } = this.props;

        return (
            <Search
                onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
                open={false}
                value={keyword} />
        );
    }

}

export default SearchContacts;
