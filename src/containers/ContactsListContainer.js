import { connect } from 'react-redux'
import ContactsList from '../components/ContactsList'
import { selectContact } from '../redux/actions'
import { getContactsBySearch } from '../selectors'

const mapStateToProps = state => ({
  contacts: getContactsBySearch(state),
  selectedContact: state.contacts.selected
});

const mapDispatchToProps = dispatch => ({
  selectContact: (contact) => dispatch( selectContact(contact) )
});

const ContactsListContainer = connect(mapStateToProps, mapDispatchToProps)(ContactsList)

export default ContactsListContainer