

import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import React from 'react';
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

interface CountryInfo {
  lat: number;
  long: number;
  iso3: string;
}

interface Country {
  country: string;
  active: number;
  recovered: number;
  deaths: number;
  countryInfo: CountryInfo;
}

const Map: React.FC = () => {
    const { data, isLoading, error } = useCountriesData();

  if (isLoading) {
    return <p className="text-center text-gray-700">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">Error loading data: {error.message}</p>;
  }

  return (
    <MapContainer center={[20, 10]} zoom={2} style={{ height: '500px', width: '100%', zIndex: 1 }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {data.map((country: Country) => (
        <Marker
          key={country.countryInfo.iso3}
          position={[country.countryInfo.lat, country.countryInfo.long]}
          icon={customIcon}
        >
          <Popup>
            <div className="map-popup-content">
              <h3 className="text-lg font-semibold">{country.country}</h3>
              <p><strong>Active Cases:</strong> {country.active}</p>
              <p><strong>Recovered:</strong> {country.recovered}</p>
              <p><strong>Deaths:</strong> {country.deaths}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
