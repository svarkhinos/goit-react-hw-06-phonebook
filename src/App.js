import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Section from './components/Section/Section';
import Form from './components/Form/Form';

import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';

const App = () => {
  return (
    <div>
      Homework-6
      <Section title="Phone-book">
        <Form />
      </Section>
      <Section title="Contacts">
        <Filter />

        <ContactList />
      </Section>
      <ToastContainer autoClose={3000} position={'top-center'} />
    </div>
  );
};

export default App;
