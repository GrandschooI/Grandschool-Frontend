import React from 'react'

import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import App from './App'
import store from './Redux/redux-toolkit-store'
import reportWebVitals from './reportWebVitals'
import './index.css'

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <ToastContainer />
  </Provider>,
  document.getElementById('root')
)

reportWebVitals()
