import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

// Screens
import MainContainerScreen from '../MainContainer';
import RegisterScreen from './RegisterScreen';
import ForgotPasswordScreen from './ForgotPasswordScreen';

// Screen Names
const MainContainerName = "Main";
const registerName = "Inscription";
const forgotPasswordName = "Mot de passe oublié";


const Stack = createStackNavigator();

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (navigation) => {
  // Redirection vers l'interface MainContainer (TabNavigator)
    navigation.navigate(MainContainerName);
  };
  

  const handleForgotPassword = (navigation) => {
    // Redirection vers la page de réinitialisation du mot de passe
    navigation.navigate(forgotPasswordName);
  };

  const handleFirstTimeLogin = (navigation) => {
    // Redirection vers un autre écran pour la première connexion
    navigation.navigate(registerName);
  };

  function Login({ navigation }) {
    return (
      <View style={styles.container}>
        <Image source={require('../../assets/icon.png')} style={styles.logo} />

        <TextInput
          placeholder="Adresse e-mail"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />

        <TextInput
          placeholder="Mot de passe"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />

        <TouchableOpacity onPress={() => handleLogin(navigation)} style={styles.button}>
          <Text style={styles.buttonText}>Connexion</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleForgotPassword(navigation)}>
          <Text style={styles.forgotPasswordText}>Mot de passe oublié</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleFirstTimeLogin(navigation)}>
          <Text style={styles.firstTimeLoginText}>Première connexion</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
      <Stack.Screen name={forgotPasswordName} component={ForgotPasswordScreen} options={{ headerShown: false }}/>
      <Stack.Screen name={registerName} component={RegisterScreen} options={{ headerShown: false }}/>
      <Stack.Screen name={MainContainerName} component={MainContainerScreen} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 50,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'blue',
    width: '80%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  forgotPasswordText: {
    color: 'blue',
    marginBottom: 10,
  },
  firstTimeLoginText: {
    color: 'blue',
  },
});