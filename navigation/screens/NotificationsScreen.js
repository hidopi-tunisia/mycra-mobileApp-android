import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const AlertesScreen = () => {
  const alertesData = [
    { id: 1, title: 'Alerte 1', time: '9:00 AM', description: 'Description de l\'alerte 1' },
    { id: 2, title: 'Alerte 2', time: '10:30 AM', description: 'Description de l\'alerte 2' },
    { id: 3, title: 'Alerte 3', time: '12:00 PM', description: 'Description de l\'alerte 3' },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={alertesData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.alerteItem}>
            <Text style={styles.alerteTitle}>{item.title}</Text>
            <Text style={styles.alerteTime}>{item.time}</Text>
            <Text style={styles.alerteDescription}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

const NotificationsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.noNotificationsText}>Aucune notification</Text>
    </View>
  );
};

const NotificationsScreenContainer = () => {
  const [selectedScreen, setSelectedScreen] = useState('Alertes');

  const handleSelectScreen = (screen) => {
    setSelectedScreen(screen);
  };

  return (
    <View style={styles.container}>
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={[styles.menuButton, selectedScreen === 'Alertes' && styles.selectedMenuButton]}
          onPress={() => handleSelectScreen('Alertes')}
        >
          <Text style={styles.menuButtonText}>Alertes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.menuButton, selectedScreen === 'Notifications' && styles.selectedMenuButton]}
          onPress={() => handleSelectScreen('Notifications')}
        >
          <Text style={styles.menuButtonText}>Notifications</Text>
        </TouchableOpacity>
      </View>
      {selectedScreen === 'Alertes' ? <AlertesScreen /> : <NotificationsScreen />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  menuContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  menuButton: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#333333',
    borderRadius: 8,
    marginRight: 8,
  },
  selectedMenuButton: {
    backgroundColor: '#CCCCCC',
  },
  menuButtonText: {
    fontSize: 16,
    color: '#333333',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  alerteItem: {
    borderWidth: 1,
    borderColor: '#333333',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  alerteTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  alerteTime: {
    fontSize: 14,
    color: '#888888',
    marginBottom: 8,
  },
  alerteDescription: {
    fontSize: 14,
    color: '#333333',
  },
  noNotificationsText: {
    fontSize: 16,
    color: '#888888',
    textAlign: 'center',
  },
});

export default NotificationsScreenContainer;