import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import reportWebVitals from './reportWebVitals';
import App from './App';
import store from "./Redux/redux-toolkit-store";
import store from './Redux/redux-store';
import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
            <ToastContainer />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
