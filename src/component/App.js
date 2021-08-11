// import { useState, useEffect, useRef } from "react";
// import { v4 as uuidv4 } from "uuid";
import Container from "./Container";
import Form from "./Form";
import Filter from "./Filter/Filter.jsx";
import ContactsList from "./ContactsList/ContactsList.jsx";
import { GrContactInfo } from "react-icons/gr";
// import ContactsJson from "../Data/contacts.json";
// import { useSelector } from "react-redux";
// import { getContacts } from "../redux/selectors";

export default function App() {
  // const contacts = useSelector(getContacts);

  return (
    <Container title="Phonebook">
      <Form />
      <h2>
        <GrContactInfo /> Contacts
      </h2>
      <Filter />
      <ContactsList />
    </Container>
  );
}
