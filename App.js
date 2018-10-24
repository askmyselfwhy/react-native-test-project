import React from 'react';
import List from './src/Pages/List'

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './src/reducers';

const store = createStore(reducer);


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <List></List>
      </Provider>
    );
  }
}
