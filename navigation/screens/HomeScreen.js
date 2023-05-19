import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Bienvenue user</Text>
            <View style={styles.calendarContainer}>
                <Calendar />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 30,
        marginTop: 50,
        marginBottom: 30,
    },
    calendarContainer: {
        width: '100%',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 20,
    },
});

export default HomeScreen;