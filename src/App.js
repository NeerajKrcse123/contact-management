import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import DashboardPage from "./pages/DashboardPage";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";
const App = () => {
    return (_jsxs("div", { className: "flex w-[100%]", children: [_jsx(Sidebar, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(HomePage, {}) }), _jsx(Route, { path: "/maps", element: _jsx(DashboardPage, {}) })] })] }));
};
export default App;
//# sourceMappingURL=App.js.map