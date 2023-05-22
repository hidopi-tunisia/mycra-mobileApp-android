import React, { useState } from 'react';
import { View, Image, Text, TextInput, Button } from 'react-native';

const ProfileScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const saveProfile = () => {
    // Logique pour sauvegarder les informations du profil
  };

  return (
    <View style={styles.container}>
      <View style={styles.statusContainer}>
        <Text style={styles.status}>
          {/* Afficher si l'utilisateur est en mission ou non */}
          en mission
        </Text>

        <Image
          style={styles.logo}
          source={require('../../assets/icon.png')}
        />

        <Text style={styles.date}>
          {/* Afficher la date d'inscription */}
          22/05/2023
        </Text>
      </View>

      <Text style={styles.name}>
        Hamdi Chebbi
        {firstName} {lastName}
      </Text>

      <Text style={styles.role}>
        {/* Afficher la fonction de l'utilisateur */}
        Chef de projet agile
      </Text>

      <View style={styles.contactContainer}>
        <Image
          style={styles.icon}
          source={require('../../assets/email.png')}
        />
        <Text style={styles.contactText}>
            h.chebbi@r2d2smartfun.fr
          {email}
        </Text>
      </View>

      <Text style={styles.intitule}>
        Adresse postale :
      </Text>
      <TextInput
        style={styles.input}
        placeholder="rue, boulevard"
        value={address}
        onChangeText={text => setAddress(text)}
      />

      <Text style={styles.intitule}>
        Ville :
      </Text>
      <TextInput
        style={styles.input}
        placeholder="ma ville"
        value={city}
        onChangeText={text => setCity(text)}
      />

      <Text style={styles.intitule}>
        Numéro de téléphone :
      </Text>
      <TextInput
        style={styles.input}
        placeholder="+33123456901"
        value={phoneNumber}
        onChangeText={text => setPhoneNumber(text)}
      />

      <Button
        title="Sauvegarder"
        onPress={saveProfile}
      />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  status: {
    fontSize: 16,
    marginRight: 10,
  },
  date: {
    fontSize: 12,
    marginLeft: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  role: {
    fontSize: 16,
    marginBottom: 40,
  },
  contactContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginLeft: '10%',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  contactText: {
    flex: 1,
    fontSize: 16,
  },
  intitule: {
    alignSelf: 'flex-start',
    textAlign: 'left',
    marginLeft: '10%',
    marginBottom: '2%',
  },
  input: {
    width: '80%',
    height: 40,
    borderBottomWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
};

export default ProfileScreen;