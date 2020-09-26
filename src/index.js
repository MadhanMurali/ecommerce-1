import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router } from 'react-router-dom';

import { ApolloProvider } from '@apollo/client';
import { client } from './Globals/Config';

import Store from './Globals/ReduxStores/Store';
import { Provider } from 'react-redux';
 
import App from './App';

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={Store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </ApolloProvider>,
document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
