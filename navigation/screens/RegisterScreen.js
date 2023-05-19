import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleAuthenticate = () => {
    // Vérification des données d'inscription ici
    if (password !== confirmPassword) {
      console.log('Les mots de passe ne correspondent pas');
      return;
    }

    // Redirection vers la page de confirmation du mot de passe
    navigation.navigate('PasswordConfirmationScreen', { email, password });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inscription</Text>
      <TextInput
        placeholder="Adresse e-mail"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TouchableOpacity onPress={handleAuthenticate} style={styles.button}>
        <Text style={styles.buttonText}>S'authentifier</Text>
      </TouchableOpacity>
    </View>
  );
}

export function PasswordConfirmationScreen({ route }) {
  const { email, password } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Confirmation du mot de passe</Text>
      <Text>Email: {email}</Text>
      <Text>Mot de passe: {password}</Text>
      {/* Ajoutez ici les champs et la logique de confirmation du mot de passe */}
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginBottom: 20,
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
