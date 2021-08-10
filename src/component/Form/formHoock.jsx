import { useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
// import { getContacts } from "../../redux/selectors.js";
import * as actions from "../../redux/actions.js";
// import { addContact } from '../../redux/slices/todo.js';
import { Input, TitleSecond, Button } from './Form.styles';
import { FiUser, FiPhoneCall } from 'react-icons/fi';
import { AiOutlineUserAdd } from 'react-icons/ai';
import PropTypes from 'prop-types';


export default function Form() {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const dispatch = useDispatch();
    // const contacts = useSelector(getContacts)

    const nameInputId = uuidv4();
    const numberInputId = uuidv4();

    const heandleChange = (e) => {
        const { name, value } = e.target;

        switch (name) {
            case 'name':
                setName(value)
                break
            case 'number':
                setNumber(value)
                break
            default:
                return
        }
    }
    const handleSubmit = (e) => {
    e.preventDefault();
    // if (contacts.some((contact) => contact.name === name)) {
        // console.log(`${name} already in the contacts.`);
        // return;
    // }
    dispatch(actions.addContact(name, number));
    // dispatch(addContact(name, number));
    
    // onSubmit(name, number);
    reset();
};

    const reset = () => {
        setName('')
        setNumber('')
    };

    return (
        <form onSubmit={handleSubmit}>
            <TitleSecond htmlFor={nameInputId}><FiUser /> Name</TitleSecond>
            <Input
                type="text"
                name="name"
                placeholder="Enter name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                value={name}
                onChange={heandleChange}
                id={nameInputId}
                required
            />
            <TitleSecond htmlFor={numberInputId}><FiPhoneCall /> Number</TitleSecond>
            <Input
                type="tel"
                name='number'
                placeholder='Enter number'
                autoComplete='all'
                onChange={heandleChange}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                value={number}
                id={numberInputId}
                required
            />
            <Button
                type="submit"
                disabled={!name || !number}><AiOutlineUserAdd /> Add contact</Button>
        </form>

    )

}
Form.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}