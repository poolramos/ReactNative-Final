import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet} from 'react-native';
import { Provider } from 'react-redux';
import store from './store'
//Componentes
import Index from './navigation/index'
import {init} from './db'

init()
  .then(() => console.log('Database initialized'))
  .catch((err) => {
    console.log('Database failed to connect');
    console.log(err.message)
  });

export default function App() {
    
  return (
    <Provider store={store}>
       <Index />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
