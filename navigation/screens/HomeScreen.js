import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Bienvenue user</Text>
            <Text style={styles.description}>Merci de saisir votre CRA avant la fin du mois actuel. Le mois est déjà pré-rempli</Text>
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
        marginBottom: 30,
    },
    description: {
        fontSize: 18,
        marginBottom: 20,
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