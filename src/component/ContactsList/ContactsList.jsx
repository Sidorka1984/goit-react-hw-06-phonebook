import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from '../../redux/slices/todo.js';
import { Contact, ContactItem, BtnDelete, Text } from './ContactsList.styles';
import { AiOutlineDelete, AiOutlineUser } from 'react-icons/ai';
// import * as actions from "../../redux/actions.js";
import { getVisibleContacts } from "../../redux/selectors.js";


const ContactsList = () => {
    const contacts = useSelector(getVisibleContacts);
    const dispatch = useDispatch();
    const onDeleteContact = (id) => dispatch(deleteContact(id));
    return (
        <Contact>
            {contacts.map(({ id, name, number }) => (
                <ContactItem key={id}><AiOutlineUser />
                    <Text>{name}: {number}</Text>
                    <BtnDelete onClick={() => onDeleteContact(id)}><AiOutlineDelete /></BtnDelete>
                </ContactItem>
            ))}
        </Contact>
    )
}
export default ContactsList;