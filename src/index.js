import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Homepage from './screen/Homepage';
import store from "./store";
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Homepage/>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// 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