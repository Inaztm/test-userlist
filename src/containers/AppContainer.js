import { connect } from 'react-redux'
import App from '../App'
import { fetchContacts, selectContact } from '../redux/actions'

const mapStateToProps = state => ({
  contacts: state.contacts.all,
  selectedContact: state.contacts.selected
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch( fetchContacts() ),
  selectContact: (contact) => dispatch( selectContact(contact) )
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)

export default AppContainer