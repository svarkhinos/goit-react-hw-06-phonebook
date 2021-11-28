import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actions';
import s from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <label>
    <input className={s.input} type="text" value={value} onChange={onChange} />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(contactsActions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
