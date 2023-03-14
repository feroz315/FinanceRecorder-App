
import React from 'react';
import StackNavigation from './src/Pages/StackNavigator/StackNavigator';

import { Provider } from 'react-redux'
import { store } from './src/store/store';


const App = () =>  {
  return (


    <Provider store={store}>
    <StackNavigation />
    </Provider>
    
  )
};



export default App;
