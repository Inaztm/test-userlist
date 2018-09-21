import { connect } from 'react-redux'
import SearchContacts from '../components/SearchContacts'
import { selectContact } from '../redux/actions'

const mapStateToProps = state => ({
  contacts: state.contacts.all,
  selectedContact: state.contacts.selected
});

const mapDispatchToProps = dispatch => ({
  selectContact: (contact) => dispatch( selectContact(contact) )
});

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(SearchContacts)

export default SearchContainer