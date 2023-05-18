import React, { useEffect, useState } from 'react';
import { View, Text, Image, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainContainer from './navigation/MainContainer';
import WelcomeScreen from './navigation/screens/WelcomeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen from './navigation/screens/AuthScreen';

/**
 * Mise en place du SplashScreen
 * @returns Redirection vers mon WelcomeScreen
 */
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image source={require('./assets/splash.png')} style={{ width: 150, height: 150 }} />
        <Text style={{ fontSize: 26, fontWeight: 'bold', marginTop: 20 }}>Votre slogan ici</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <WelcomeScreen/>
    </NavigationContainer>
  );
}

export default App;
