import { connect } from 'react-redux'
import SearchContacts from '../components/SearchContacts'
import { setKeyword } from '../redux/actions'

const mapStateToProps = state => ({
  keyword: state.contacts.keyword
});

const mapDispatchToProps = dispatch => ({
  setKeyword: value => dispatch( setKeyword(value) )
});

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(SearchContacts)

export default SearchContainer