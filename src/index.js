import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import { Provider } from "react-redux";

import { carReducer } from "./reducers";

import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

/*
STEP 1 - Create a store! Pass our store object into the Redux Provider component that is wrapped around <App />
    a. Give your Provider the store property and equal it to the Value of store.
     
    b. Import reducer function from reducer folder
*/

export const store = createStore(carReducer)

console.log(store)

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, rootElement);
