import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LegalScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Informations légales sur notre application</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Nom de l'entreprise:</Text>
        <Text style={styles.text}>Hidopi</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Siège social:</Text>
        <Text style={styles.text}>02 rue de la Fosse, ..</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Numéro de téléphone:</Text>
        <Text style={styles.text}>0123456789</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Adresse e-mail:</Text>
        <Text style={styles.text}>contact@votreentreprise.com</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Numéro SIRET:</Text>
        <Text style={styles.text}>12345678900000</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 40,
    color: '#666666',
  },
  infoContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#666666',
  },
  text: {
    fontSize: 16,
    color: '#333333',
  },
});
