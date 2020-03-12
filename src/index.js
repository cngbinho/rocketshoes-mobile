import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';

import './config/ReactotronConfig';
import {StyledSafeArea} from './pages/Home/styles';

import Routes from './routes';
import store from './store';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="black" />
      <Provider store={store}>
        <StyledSafeArea>
          <Routes />
        </StyledSafeArea>
      </Provider>
    </>
  );
};

export default App;
