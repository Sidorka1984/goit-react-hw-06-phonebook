import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { onDelete } from '../../redux/actions/todo.js';
import PropTypes from 'prop-types';
import { Contact, ContactItem, BtnDelete, Text } from './ContactsList.styles';
import { AiOutlineDelete, AiOutlineUser } from 'react-icons/ai';

const ContactsList = () => {
    const contacts = useSelector((state) => state.todo);
    const dispatch = useDispatch();
    // const onDeleteContact = () => {        
        // dispatch(onDelete(id));
    // }
    return (
        <Contact>
            {contacts.map(({ id, name, number }) => (
                <ContactItem key={id}><AiOutlineUser /><Text>{name}: {number}</Text>
                    <BtnDelete onClick={() =>dispatch(onDelete(id))}><AiOutlineDelete /></BtnDelete>
                </ContactItem>
            ))}
        </Contact>
    )
}
ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ).isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};
export default ContactsList;