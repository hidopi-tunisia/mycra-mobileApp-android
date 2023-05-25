import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function AboutScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/icon.png')} style={styles.logo} />
      <Text style={styles.description}>
        Ajoutez ici votre description de l'application ou de votre entreprise.
      </Text>
      <View style={styles.socialMediaButtonsContainer}>
        <TouchableOpacity style={styles.socialMediaButton}>
          <FontAwesome name="facebook" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialMediaButton}>
          <FontAwesome name="instagram" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialMediaButton}>
          <FontAwesome name="twitter" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <Text style={styles.copyRight}>
        © {new Date().getFullYear()} Hidopi. Tous droits réservés.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 40,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 50,
  },
  socialMediaButtonsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  socialMediaButton: {
    backgroundColor: '#3b5998',
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 10,
  },
  copyRight: {
    fontSize: 12,
    color: '#888',
  },
});