import React from 'react';
import ContactList from '../components/ContactList';

const HomePage: React.FC = () => {
  return (
    <div className=" w-[100%] mx-auto">
      <ContactList />
    </div>
  );
};

export default HomePage;
