import { Contact, ContactItem, BtnDelete, Text } from './ContactsList.styles';
import { AiOutlineDelete, AiOutlineUser} from 'react-icons/ai';
import * as actions from '../../redux/actions.js';
import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from '../../redux/selectors.js';


const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const onDeleteContact = (id) => dispatch(actions.deleteContact(id));
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

export default ContactList;

// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { onDelete } from '../../redux/slices/todo.js';
// import PropTypes from 'prop-types';
// import { Contact, ContactItem, BtnDelete, Text } from './ContactsList.styles';
// import { AiOutlineDelete, AiOutlineUser } from 'react-icons/ai';
// import * as actions from "../../redux/actions.js";
// import { getVisibleContacts } from "../../redux/selectors.js";
// 
// const ContactsList = () => {
    // const contacts = useSelector((state) => state.todo);
    // const contacts = useSelector(getVisibleContacts);
    // const dispatch = useDispatch();
    // const onDeleteContact = (id) => dispatch(actions.deleteContact(id));
    
    // return (
        // <Contact>
            // {/* {contacts.map(({ id, name, number }) => ( */}
                // {/* <ContactItem key={id}><AiOutlineUser /> */}
                    // {/* <Text>{name}: {number}</Text> */}
                    // {/* <BtnDelete onClick={() => dispatch(actions.deleteContact(id))}><AiOutlineDelete /></BtnDelete> */}
                // {/* </ContactItem> */}
            // {/* ))} */}
        // {/* </Contact> */}
    // )
// }
// ContactsList.propTypes = {
    // contacts: PropTypes.arrayOf(
        // PropTypes.shape({
            // id: PropTypes.string.isRequired,
            // name: PropTypes.string.isRequired,
            // number: PropTypes.string.isRequired,
        // })
    // ).isRequired,
    // onDeleteContact: PropTypes.func.isRequired,
// };
// export default ContactsList;