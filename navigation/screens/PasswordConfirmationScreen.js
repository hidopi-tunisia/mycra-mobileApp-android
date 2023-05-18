import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export function PasswordConfirmationScreen({ navigation, route }) {
  const [confirmedPassword, setConfirmedPassword] = useState('');

  const handleConfirmPassword = () => {
    if (route.params && route.params.email && route.params.password) {
      // Vérification de la confirmation du mot de passe
      if (route.params.password !== confirmedPassword) {
        console.log('La confirmation du mot de passe est incorrecte');
        return;
      }

      // Logique pour enregistrer les données utilisateur
      console.log('Enregistrement des données utilisateur...');

      // Redirection vers une autre page ou affichage d'un message de réussite
      navigation.navigate('SuccessScreen');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Confirmation du mot de passe</Text>
      <Text>Email: {route.params && route.params.email}</Text>

      <TextInput
        placeholder="Confirmez le mot de passe"
        value={confirmedPassword}
        onChangeText={setConfirmedPassword}
        style={styles.input}
        secureTextEntry
      />

      <TouchableOpacity onPress={handleConfirmPassword} style={styles.button}>
        <Text style={styles.buttonText}>Confirmer</Text>
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
