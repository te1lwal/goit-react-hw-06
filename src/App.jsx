import { useSelector } from "react-redux";

import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

function App() {
  const contacts = useSelector((state) => state.contacts.items);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {contacts.length > 0 ? (
        <ContactList />
      ) : (
        <p className="text">
          Looks like your contact list is empty. Time to fill it up!
        </p>
      )}
    </div>
  );
}

export default App;
