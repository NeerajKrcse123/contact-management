import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact, updateContact } from '../redux/contactsSlice';
const ContactForm = ({ contact, onClose }) => {
    const dispatch = useDispatch();
    const [firstName, setFirstName] = useState((contact === null || contact === void 0 ? void 0 : contact.firstName) || '');
    const [lastName, setLastName] = useState((contact === null || contact === void 0 ? void 0 : contact.lastName) || '');
    const [status, setStatus] = useState((contact === null || contact === void 0 ? void 0 : contact.status) || 'active'); // Ensure status is correctly typed
    const handleSubmit = () => {
        const newContact = {
            id: (contact === null || contact === void 0 ? void 0 : contact.id) || Date.now(),
            firstName,
            lastName,
            status,
        };
        if (contact) {
            dispatch(updateContact(newContact));
        }
        else {
            dispatch(addContact(newContact));
        }
        onClose();
    };
    return (_jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50", children: _jsx("div", { className: "bg-white rounded-lg shadow-lg w-full max-w-lg mx-4 sm:mx-auto sm:w-2/3 lg:w-1/3", children: _jsxs("div", { className: "px-6 py-4", children: [_jsx("h2", { className: "text-xl font-semibold mb-4", children: contact ? 'Edit Contact' : 'Create Contact' }), _jsxs("div", { className: "mb-4", children: [_jsx("label", { className: "block text-gray-700", children: "First Name:" }), _jsx("input", { type: "text", value: firstName, onChange: (e) => setFirstName(e.target.value), className: "w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" })] }), _jsxs("div", { className: "mb-4", children: [_jsx("label", { className: "block text-gray-700", children: "Last Name:" }), _jsx("input", { type: "text", value: lastName, onChange: (e) => setLastName(e.target.value), className: "w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" })] }), _jsxs("div", { className: "mb-4", children: [_jsx("label", { className: "block text-gray-700", children: "Status:" }), _jsxs("select", { value: status, onChange: (e) => setStatus(e.target.value), className: "w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400", children: [_jsx("option", { value: "active", children: "Active" }), _jsx("option", { value: "inactive", children: "Inactive" })] })] }), _jsxs("div", { className: "flex justify-end", children: [_jsx("button", { onClick: onClose, className: "mr-2 bg-gray-500 text-white px-4 py-2 rounded-lg focus:outline-none hover:bg-gray-600", children: "Cancel" }), _jsx("button", { onClick: handleSubmit, className: "bg-blue-500 text-white px-4 py-2 rounded-lg focus:outline-none hover:bg-blue-600", children: "Save" })] })] }) }) }));
};
export default ContactForm;
//# sourceMappingURL=ContactForm.js.map