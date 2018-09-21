import React, { Component } from 'react';

import NavigationWrapper from './components/NavigationWrapper';
import NavigationMenu from './components/NavigationMenu';

import ContactsListContainer from './containers/ContactsListContainer';
import SearchContainer from './containers/SearchContainer';
import ContactDetailContainer from './containers/ContactDetailContainer';

class App extends Component {

    componentDidMount() {
        this.props.fetchContacts();
    }

    render() {
        return (
            <NavigationWrapper>
                <NavigationMenu>
                    <SearchContainer />
                    <ContactsListContainer />
                </NavigationMenu>
                <main className="full-width">
                    <ContactDetailContainer />
                </main>
            </NavigationWrapper>
        );
    }

}

export default App;
