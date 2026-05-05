import { jsx as _jsx } from "react/jsx-runtime";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import './index.css';
import { persistor, store } from './redux/store';
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(_jsx(BrowserRouter, { children: _jsx(React.StrictMode, { children: _jsx(Provider, { store: store, children: _jsx(QueryClientProvider, { client: queryClient, children: _jsx(PersistGate, { loading: null, persistor: persistor, children: _jsx(App, {}) }) }) }) }) }));
//# sourceMappingURL=main.js.map