import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../redux/contactsSlice';
import ContactForm from './ContactForm';
const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector((state) => state.contacts.contacts);
    const [selectedContact, setSelectedContact] = useState(null);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const handleDelete = (id) => {
        dispatch(deleteContact(id));
    };
    const handleEdit = (contact) => {
        setSelectedContact(contact);
        setIsFormOpen(true);
    };
    const handleCloseForm = () => {
        setSelectedContact(null);
        setIsFormOpen(false);
    };
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: "p-4 bg-blue-600", children: _jsx("h1", { className: "text-2xl text-white text-center font-semibold", children: "Contact Management" }) }), _jsxs("div", { className: "py-4 px-2", children: [_jsx("button", { onClick: () => setIsFormOpen(true), className: "mb-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-600", children: "Create Contact" }), isFormOpen && (_jsx(ContactForm, { contact: selectedContact, onClose: handleCloseForm }))] }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2", children: contacts.map((contact) => (_jsxs("div", { className: "p-6 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg shadow-lg border border-gray-300", children: [_jsxs("h2", { className: "text-2xl font-bold mb-2", children: [contact.firstName, " ", contact.lastName] }), _jsxs("p", { className: "text-lg mb-4", children: ["Status: ", contact.status] }), _jsxs("div", { className: "flex justify-end space-x-2", children: [_jsx("button", { onClick: () => handleEdit(contact), className: "bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600", children: "Edit" }), _jsx("button", { onClick: () => handleDelete(contact.id), className: "bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600", children: "Delete" })] })] }, contact.id))) })] }));
};
export default ContactList;
//# sourceMappingURL=ContactList.js.map