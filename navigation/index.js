import React from 'react';
import { StyleSheet,SafeAreaView } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { useSelector } from 'react-redux'
//Fonts
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

//Componentes
import TabMenu from './Tab/TabMenu';
import AuthScreen from './UserAuth/AuthScreen';

export default function Index() {

  const [dataLoaded] = useFonts({
    'open-sans': require('../assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('../assets/fonts/OpenSans-Bold.ttf'),
  })
  
  const loggedIn = useSelector(state=>state.auth.token)


  if (!dataLoaded) {
    return <AppLoading />
  }

  return (
        <NavigationContainer>
            {/* <SafeAreaView style={styles.container}> */}
            {loggedIn
            ? <TabMenu />
            : <AuthScreen />}
                 
           {/*  </SafeAreaView> */}
        </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
