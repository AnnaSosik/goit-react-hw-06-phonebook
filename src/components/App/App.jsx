import { getContacts } from 'redux/selectors';
import { useSelector } from 'react-redux';

import { Container, Title, SubTitle, Wrapper } from './App.styled';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

// The value is retrieved from the browser's local storage with the key 'contacts'
const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <Container>
      <Title>Phonebook</Title>

      <ContactForm />

      <SubTitle>Contacts</SubTitle>

      {contacts.length > 0 ? (
        // If there are contacts, the filtering component is displayed

        <Filter />
      ) : (
        // If there are no contacts, a message about no contacts is displayed
        <Wrapper>Your phonebook is empty. Add first contact!</Wrapper>
      )}
      {contacts.length > 0 && (
        // If there are contacts, the contact list component is displayed
        <ContactList />
      )}
    </Container>
  );
};

export default App;
