import { connect } from 'react-redux'
import ContactDetail from '../components/ContactDetail'
import { deselectContact } from '../redux/actions'

const mapStateToProps = state => ({
  selectedContact: state.contacts.selected
});

const mapDispatchToProps = dispatch => ({
  deselectContact: () => dispatch( deselectContact() )
});

const ContactDeatailContainer = connect(mapStateToProps, mapDispatchToProps)(ContactDetail)

export default ContactDeatailContainer