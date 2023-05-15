import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.description}>Introduction & description</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}>
          <Image style={styles.image} source={require('../../assets/partnership.png')} />
          <Text style={styles.buttonText}>Nous rejoindre</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image style={styles.image} source={require('../../assets/user.png')} />
          <Text style={styles.buttonText}>Se connecter</Text>
        </TouchableOpacity>
      </View>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  image: {
    width: 70,
    height: 70,
    marginBottom: 20,
    marginHorizontal: 20,
    position: 'absolute',
    top: 50,
  },
  title: {
    fontSize: 37,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 50,
  },  
  description: {
    fontSize: 20,
    marginBottom: 200,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  button: {
    padding: 10,
    borderRadius: 5,
    flex: 0,
    marginHorizontal: 5,
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
  },
  socialMediaButtonsContainer: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
  },
  socialMediaButton: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 50,
    marginHorizontal: 10,
  },
});

export default HomeScreen;
