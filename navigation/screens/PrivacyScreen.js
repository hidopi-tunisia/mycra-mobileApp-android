import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PrivacyScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Politique de confidentialité</Text>
      <View style={styles.contentContainer}>
        <Text style={styles.sectionTitle}>Collecte des données</Text>
        <Text style={styles.text}>
          Nous collectons des informations personnelles telles que votre nom, votre adresse e-mail et votre numéro de téléphone lorsque vous vous inscrivez sur notre application.
        </Text>
        <Text style={styles.text}>
          Nous utilisons également des cookies pour améliorer votre expérience et recueillir des informations statistiques sur l'utilisation de notre application.
        </Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.sectionTitle}>Utilisation des données</Text>
        <Text style={styles.text}>
          Les données que nous collectons sont utilisées pour vous fournir des services personnalisés, traiter vos commandes et vous contacter concernant des mises à jour ou des offres spéciales.
        </Text>
        <Text style={styles.text}>
          Nous ne partageons pas vos informations personnelles avec des tiers sans votre consentement préalable, sauf dans les cas où cela est légalement requis.
        </Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.sectionTitle}>Sécurité des données</Text>
        <Text style={styles.text}>
          Nous prenons des mesures de sécurité appropriées pour protéger vos données personnelles contre tout accès non autorisé, perte ou divulgation.
        </Text>
        <Text style={styles.text}>
          Cependant, veuillez noter qu'aucune méthode de transmission sur Internet ou de stockage électronique n'est totalement sécurisée. Nous ne pouvons donc garantir la sécurité absolue de vos données.
        </Text>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333333',
    textAlign: 'center',
  },
  contentContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333333',
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    color: '#666666',
  },
});
