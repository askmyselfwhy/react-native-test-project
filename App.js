import React from 'react';
import { createStackNavigator } from 'react-navigation';
import ListScreen from './src/Pages/ListScreen';
import PhotoScreen from '.src/Pages/PhotoScreen';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './src/reducers';

const store = createStore(reducer);


export default class App extends React.Component {
  render() {
    let AppNavigator = createStackNavigator({
      List: { screen: ListScreen },
      Photo: { screen: PhotoScreen },
    });
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
