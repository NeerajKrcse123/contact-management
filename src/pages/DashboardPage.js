import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import LineChart from "../components/LineChart";
import Map from "../components/Map";
const DashboardPage = () => {
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: "bg-blue-600 py-4  fixed top-0 left-0 w-full", children: _jsx("h1", { className: "text-2xl text-white text-center font-semibold", children: "COVID-19 Dashboard" }) }), _jsxs("div", { className: "container mx-auto ", children: [_jsxs("div", { className: "mb-8 mt-6", children: [_jsx("h2", { className: "text-xl font-semibold text-center ", children: "Worldwide Cases Fluctuations" }), _jsx("div", { className: "mt-4", children: _jsx(LineChart, {}) })] }), _jsxs("div", { className: "mb-8", children: [_jsx("h2", { className: "text-xl font-semibold text-center ", children: "World Map with COVID-19 Data" }), _jsx("div", { className: "mt-4", children: _jsx(Map, {}) })] })] })] }));
};
export default DashboardPage;
//# sourceMappingURL=DashboardPage.js.map