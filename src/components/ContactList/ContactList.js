import Contact from '../Contact/Contact';
import contactsActions from '../../redux/contacts/contacts-actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={s.list}>
      {contacts &&
        contacts.map(({ id, name, number }) => (
          <Contact
            id={id}
            name={name}
            number={number}
            key={id}
            onDeleteContact={onDeleteContact}
          />
        ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

const getVisibleContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allContacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};

// const mapStateToProps = state => {
//   const { filter, items } = state.contacts;

//   const visibleContacts = getVisibleContacts(items, filter);
//   return { contacts: visibleContacts };
// };

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getVisibleContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactsActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
