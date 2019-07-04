import React from 'react';
import {render } from 'react-dom';
import { Provider } from 'react-redux';

import { createStore } from 'redux';
import todoApp from './redusers';
import App from './components/App';
import './styles.css';
import Counter from "./containers/counter";

const store = createStore(todoApp);

render(
    <Provider store={store}>
        <App />
        <Counter />
    </Provider>,
    document.getElementById('root')
);