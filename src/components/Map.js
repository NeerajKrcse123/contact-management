import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { useCountriesData } from '../react-query/covidApi';
const customIcon = new L.Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png',
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon-2x.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
});
const Map = () => {
    const { data, isLoading, error } = useCountriesData();
    if (isLoading) {
        return _jsx("p", { className: "text-center text-gray-700", children: "Loading..." });
    }
    if (error) {
        return _jsxs("p", { className: "text-center text-red-500", children: ["Error loading data: ", error.message] });
    }
    return (_jsxs(MapContainer, { center: [20, 10], zoom: 2, style: { height: '500px', width: '100%', zIndex: 1 }, children: [_jsx(TileLayer, { url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", attribution: '\u00A9 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' }), data.map((country) => (_jsx(Marker, { position: [country.countryInfo.lat, country.countryInfo.long], icon: customIcon, children: _jsx(Popup, { children: _jsxs("div", { className: "map-popup-content", children: [_jsx("h3", { className: "text-lg font-semibold", children: country.country }), _jsxs("p", { children: [_jsx("strong", { children: "Active Cases:" }), " ", country.active] }), _jsxs("p", { children: [_jsx("strong", { children: "Recovered:" }), " ", country.recovered] }), _jsxs("p", { children: [_jsx("strong", { children: "Deaths:" }), " ", country.deaths] })] }) }) }, country.countryInfo.iso3)))] }));
};
export default Map;
//# sourceMappingURL=Map.js.map