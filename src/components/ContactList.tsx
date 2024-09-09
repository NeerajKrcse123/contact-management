

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../redux/contactsSlice';
import { RootState } from '../redux/store';
import { Contact } from '../utils/types';
import ContactForm from './ContactForm';

const ContactList: React.FC = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleDelete = (id: number) => {
    dispatch(deleteContact(id));
  };

  const handleEdit = (contact: Contact) => {
    setSelectedContact(contact);
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setSelectedContact(null);
    setIsFormOpen(false);
  };

  return (
    <>
      <div className="p-4 bg-blue-600">
        <h1 className="text-2xl text-white text-center font-semibold">Contact Management</h1>
      </div>
      <div className="py-4 px-2">
        <button
          onClick={() => setIsFormOpen(true)}
          className="mb-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-600"
        >
          Create Contact
        </button>

        {isFormOpen && (
          <ContactForm contact={selectedContact} onClose={handleCloseForm} />
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2">
        {contacts.map((contact: Contact) => (
          <div
            key={contact.id}
            className="p-6 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg shadow-lg border border-gray-300"
          >
            <h2 className="text-2xl font-bold mb-2">
              {contact.firstName} {contact.lastName}
            </h2>
            <p className="text-lg mb-4">Status: {contact.status}</p>
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => handleEdit(contact)}
                className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(contact.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ContactList;
