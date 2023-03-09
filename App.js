import * as SplashScreen from 'expo-splash-screen';

import {OpenSans_400Regular, OpenSans_700Bold, useFonts} from '@expo-google-fonts/open-sans';

import Navigator from './src/navigators/Navigator';
import React from 'react';
import { StyleSheet } from 'react-native';

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_700Bold,
  });

  React.useEffect(() => {
    if(fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Navigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
