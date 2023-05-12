import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    // Wait for 3 seconds and then navigate to HomeScreen
    setTimeout(() => {
      navigation.replace('HomeScreen');
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/splash.png')}
        style={styles.logo}
      />
      <Text style={styles.slogan}>
        Votre slogan ici
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
  },
  logo: {
    width: 150,
    height: 150,
  },
  slogan: {
    fontSize: 26,
    marginTop: 60,
    textAlign: 'center',
  },
});
