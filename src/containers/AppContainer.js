import { connect } from 'react-redux'
import App from '../App'
import { fetchContacts } from '../redux/actions'

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch( fetchContacts() )
});

const AppContainer = connect(null, mapDispatchToProps)(App)

export default AppContainer