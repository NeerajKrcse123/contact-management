
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact, updateContact } from '../redux/contactsSlice';
import { Contact } from '../utils/types';

interface ContactFormProps {
  contact?: Contact | null;
  onClose: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ contact, onClose }) => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState(contact?.firstName || '');
  const [lastName, setLastName] = useState(contact?.lastName || '');
  const [status, setStatus] = useState<Contact['status']>(contact?.status || 'active'); // Ensure status is correctly typed

  const handleSubmit = () => {
    const newContact = {
      id: contact?.id || Date.now(),
      firstName,
      lastName,
      status,
    };

    if (contact) {
      dispatch(updateContact(newContact));
    } else {
      dispatch(addContact(newContact));
    }

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg mx-4 sm:mx-auto sm:w-2/3 lg:w-1/3">
        <div className="px-6 py-4">
          <h2 className="text-xl font-semibold mb-4">
            {contact ? 'Edit Contact' : 'Create Contact'}
          </h2>

          <div className="mb-4">
            <label className="block text-gray-700">First Name:</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Last Name:</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Status:</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value as Contact['status'])} // Type assertion
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>

          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="mr-2 bg-gray-500 text-white px-4 py-2 rounded-lg focus:outline-none hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg focus:outline-none hover:bg-blue-600"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;


