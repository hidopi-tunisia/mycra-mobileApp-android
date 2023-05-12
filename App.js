import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import MainContainer from './navigation/MainContainer';

function SplashScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image
        source={require('./assets/splash.png')}
        style={{ width: 150, height: 150 }}
      />
      <Text style={{ fontSize: 26, fontWeight: 'bold', marginTop: 20 }}>
        Votre slogan ici
      </Text>
    </View>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); // set the time for the splash screen to be displayed (in milliseconds)
  }, []);

  return (
    <>
      {loading ? <SplashScreen /> : <MainContainer />}
    </>
  );
}

export default App;
