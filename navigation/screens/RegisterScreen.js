import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import PasswordConfirmationScreen from './PasswordConfirmationScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="PasswordConfirmation" component={PasswordConfirmationScreen} />
    </Stack.Navigator>
  );
}

export function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailVerification = () => {
    if (!email.endsWith('@r2d2smartfun.fr')) {
      setErrorMessage("Veuillez contacter votre manager pour plus d'informations");
      return;
    }

    navigation.navigate('PasswordConfirmation', { email });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inscription</Text>
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
      <View style={styles.inputContainer}>
        <Image source={require('../../assets/email.png')} style={styles.logo} />
        <TextInput
          placeholder="nom.prenom@r2d2smartfun.fr"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
      </View>
      <TouchableOpacity onPress={handleEmailVerification} style={styles.button}>
        <Text style={styles.buttonText}>Vérifier l'adresse e-mail</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'blue',
    width: '100%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});