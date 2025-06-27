import React, { useState, useEffect } from 'react';
import { View, StatusBar } from 'react-native';
import SplashScreen from './src/screens/SplashScreens';
import RegistroScreen from './src/screens/HomeScreens';
import HomeScreens from './src/screens/HomeScreens';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar hidden />
      {isLoading ? <SplashScreen /> : <HomeScreens/>}
    </View>
  );
}