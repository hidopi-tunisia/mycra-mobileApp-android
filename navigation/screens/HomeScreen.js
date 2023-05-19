import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Bienvenue user</Text>
            <Text style={styles.description}>Merci de saisir votre CRA avant la fin du mois actuel. Le mois est déjà pré-rempli</Text>
            <View style={styles.calendarContainer}>
                <Calendar />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Copier le dernier CRA</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Valider mon CRA</Text>
                </TouchableOpacity>
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
    buttonContainer: {
        marginTop: 20,
    },
    button: {
        backgroundColor: '#e6e6e6',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginVertical: 5,
    },
    buttonText: {
        color: 'black',
        fontSize: 16,
    },
});

export default HomeScreen;