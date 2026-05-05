import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { AiOutlineContacts, AiOutlineGlobal, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
    return (_jsxs("div", { className: "flex flex-col md:flex-row h-screen sticky top-0 left-0 z-10", children: [!isOpen && (_jsx("button", { className: "p-4 bg-blue-600 text-white md:hidden fixed top-2 left-2 z-20", onClick: toggleSidebar, children: _jsx(AiOutlineMenu, {}) })), _jsxs("div", { className: `${isOpen ? 'translate-x-0' : '-translate-x-full'} fixed md:static top-0 left-0 w-64 h-full bg-gray-800 text-white transition-transform transform md:translate-x-0 z-10`, children: [_jsxs("div", { className: "p-4 flex justify-between items-center", children: [_jsx("h1", { className: "text-2xl font-bold", children: "Dashboard" }), _jsx("button", { className: "md:hidden text-white", onClick: toggleSidebar, children: "\u2715" })] }), _jsx("nav", { className: "mt-4", children: _jsxs("ul", { children: [_jsx("li", { className: "p-2", children: _jsxs(Link, { to: "/", className: "flex items-center space-x-2 hover:bg-gray-700 p-2 rounded", children: [_jsx(AiOutlineContacts, {}), _jsx("span", { children: "Contacts" })] }) }), _jsx("li", { className: "p-2", children: _jsxs(Link, { to: "/maps", className: "flex items-center space-x-2 hover:bg-gray-700 p-2 rounded", children: [_jsx(AiOutlineGlobal, {}), _jsx("span", { children: "Maps" })] }) })] }) })] }), isOpen && (_jsx("div", { className: "fixed inset-0 bg-black opacity-50 z-0 md:hidden", onClick: toggleSidebar }))] }));
};
export default Sidebar;
//# sourceMappingURL=Sidebar.js.map