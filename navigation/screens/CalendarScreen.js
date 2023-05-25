import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const Timeline = ({ data }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.timelineItem}>
            <View style={styles.timelinePoint} />
            <View style={styles.timelineEvent}>
              <View style={styles.eventHeader}>
                <Text style={styles.eventTitle}>{item.title}</Text>
                <Text style={styles.eventTime}>{item.time}</Text>
              </View>
              <Text style={styles.eventDescription}>{item.description}</Text>
              {item.image && (
                <View style={styles.eventImageContainer}>
                  <Image source={item.image} style={styles.eventImage} />
                  <Text style={styles.eventImageCaption}>{item.imageCaption}</Text>
                </View>
              )}
              {item.subItems && (
                <FlatList
                  data={item.subItems}
                  keyExtractor={(subItem, index) => index.toString()}
                  renderItem={({ item: subItem }) => (
                    <View style={styles.subItemContainer}>
                      <Text style={styles.subItemText}>{subItem.label}</Text>
                      <TouchableOpacity onPress={subItem.onPress}>
                        <Image source={subItem.icon} style={styles.subItemIcon} />
                      </TouchableOpacity>
                    </View>
                  )}
                />
              )}
            </View>
          </View>
        )}
      />
    </View>
  );
};

const TimelineScreen = () => {
  const timelineData = [
    {
      id: 1,
      title: 'Événement 1',
      time: '9:00 AM',
      description: 'Description de l\'événement 1',
    },
    {
      id: 2,
      title: 'Événement 2',
      time: '10:30 AM',
      description: 'Description de l\'événement 2',
      image: require('../../assets/icon.png'),
      imageCaption: 'Légende de l\'image',
    },
    {
      id: 3,
      title: 'Événement 3',
      time: '12:00 PM',
      description: 'Description de l\'événement 3',
      subItems: [
        {
          id: 1,
          label: 'Sous-élément 1',
          icon: require('../../assets/icon.png'),
          onPress: () => {
            // Action du sous-élément 1
          },
        },
        {
          id: 2,
          label: 'Sous-élément 2',
          icon: require('../../assets/icon.png'),
          onPress: () => {
            // Action du sous-élément 2
          },
        },
      ],
    },
  ];

  return (
    <View style={styles.container}>
      <Timeline data={timelineData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  timelineItem: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  timelinePoint: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#333333',
    marginRight: 16,
  },
  timelineEvent: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#333333',
    padding: 16,
    borderRadius: 8,
  },
  eventHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  eventTime: {
    fontSize: 14,
    color: '#888888',
  },
  eventDescription: {
    marginBottom: 8,
    color: '#333333',
  },
  eventImageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  eventImage: {
    width: 23,
    height: 23,
    marginRight: 8,
  },
  eventImageCaption: {
    fontSize: 14,
    color: '#333333',
  },
  subItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  subItemText: {
    fontSize: 14,
    color: '#333333',
  },
  subItemIcon: {
    width: 16,
    height: 16,
  },
});

export default TimelineScreen;