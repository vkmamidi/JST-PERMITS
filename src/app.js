import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {startSetDetails } from './actions/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

console.log('NODE_ENV',process.env.FIREBASE_DATABASE_URL)


ReactDOM.render(<p>Loading....</p>,document.getElementById('app'))

store.dispatch(startSetDetails()).then(()=>{
  ReactDOM.render(jsx, document.getElementById('app'));
})

