
import React, { useState } from 'react';
import { AiOutlineContacts, AiOutlineGlobal, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen sticky top-0 left-0 z-10">
      {!isOpen && (
        <button
          className="p-4 bg-blue-600 text-white md:hidden fixed top-2 left-2 z-20"
          onClick={toggleSidebar}
        >
          <AiOutlineMenu />
        </button>
      )}

     
      <div
        className={`${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } fixed md:static top-0 left-0 w-64 h-full bg-gray-800 text-white transition-transform transform md:translate-x-0 z-10`}
      >
        <div className="p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <button className="md:hidden text-white" onClick={toggleSidebar}>
            ✕
          </button>
        </div>

        <nav className="mt-4">
          <ul>
            <li className="p-2">
              <Link
                to="/"
                className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded"
              >
                <AiOutlineContacts />
                <span>Contacts</span>
              </Link>
            </li>
            <li className="p-2">
              <Link
                to="/maps"
                className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded"
              >
                <AiOutlineGlobal />
                <span>Maps</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-0 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;

