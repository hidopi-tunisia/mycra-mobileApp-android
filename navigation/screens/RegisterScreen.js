import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

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

  const handleEmailVerification = () => {
    if (!email.endsWith('@r2d2smartfun.fr')) {
      console.log("Veuillez contacter votre manager pour plus d'informations");
      return;
    }

    navigation.navigate('PasswordConfirmation', { email });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inscription</Text>
      <View style={styles.inputContainer2}>
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

export function PasswordConfirmationScreen({ route }) {
  const { email } = route.params;
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handlePasswordConfirmation = () => {
    if (password !== confirmPassword) {
      console.log("Les mots de passe ne correspondent pas");
      return;
    }

    // Ajoutez ici la logique de confirmation du mot de passe
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Confirmation du mot de passe</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Nouveau mot de passe</Text>
        <TextInput
          placeholder="Saisissez votre nouveau mot de passe"
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          secureTextEntry
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Confirmer le mot de passe</Text>
        <TextInput
          placeholder="Confirmez votre mot de passe"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          style={styles.input}
          secureTextEntry
        />
      </View>
      <TouchableOpacity onPress={handlePasswordConfirmation} style={styles.button}>
        <Text style={styles.buttonText}>Confirmer le mot de passe</Text>
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
  emailText: {
    fontSize: 16,
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  inputContainer2: {
    width: '100%',
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputLabel: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    width: '100%',
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
});