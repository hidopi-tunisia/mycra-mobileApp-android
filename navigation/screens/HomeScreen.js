import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';

const HomeScreen = () => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();
  const firstDayOfMonth = new Date(currentYear, currentMonth - 1, 1);
  const firstDayOfWeek = firstDayOfMonth.getDay();
  const daysInMonth = new Date(currentYear, currentMonth, 0).getDate();
  const [selectedDates, setSelectedDates] = useState([]);

  useEffect(() => {
    const prepopulateDates = () => {
      const dates = [];
      for (let i = 1; i <= daysInMonth; i++) {
        const dayOfWeek = new Date(currentYear, currentMonth - 1, i).getDay();
        if (dayOfWeek !== 6 && dayOfWeek !== 0) {
          dates.push(`${currentYear}-${currentMonth.toString().padStart(2, '0')}-${i.toString().padStart(2, '0')}`);
        }
      }
      return dates;
    };
    const prepopulatedDates = prepopulateDates();
    setSelectedDates(prepopulatedDates);
  }, [currentMonth, currentYear, daysInMonth]);

  const markedDates = {};

  selectedDates.forEach((date) => {
    markedDates[date] = {
      selected: true,
      selectedTextColor: 'blue',
      disableTouchEvent: false,
    };
  });

  const handleDayPress = (date) => {
    const selected = selectedDates.includes(date.dateString);
    const dayOfWeek = new Date(date.dateString).getDay();

    // Ignorer la sélection des samedis (6) et dimanches (0)
    if (dayOfWeek === 6 || dayOfWeek === 0) {
      return;
    }

    if (selected) {
      setSelectedDates((prevDates) => prevDates.filter((d) => d !== date.dateString));
    } else {
      setSelectedDates((prevDates) => [...prevDates, date.dateString]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bienvenue user</Text>
      <Text style={styles.description}>Merci de saisir votre CRA avant la fin du mois actuel. Le mois est déjà pré-rempli</Text>
      <View style={styles.calendarContainer}>
        <Calendar
          markedDates={markedDates}
          hideExtraDays={true}
          firstDay={firstDayOfWeek === 0 ? 7 : firstDayOfWeek}
          theme={{
            textDayFontSize: 16,
            textMonthFontSize: 18,
            textDayHeaderFontSize: 16,
          }}
          onDayPress={handleDayPress}
        />
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
