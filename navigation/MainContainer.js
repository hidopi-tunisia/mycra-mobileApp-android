import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import HomeScreen from './screens/HomeScreen';
import CalendarScreen from './screens/CalendarScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import ProfileScreen from './screens/ProfileScreen';
import AboutScreen from './screens/AboutScreen';
import LegalScreen from './screens/LegalScreen';
import PrivacyScreen from './screens/PrivacyScreen';

// Screen names
const homeName = "Accueil";
const calendarName = "Calendrier";
const notificationsName = "Notifications";
const profileName = "Profil";
const aboutName = "A propos";
const legalName = "Mentions légales";
const privacyName = "Politique de confidentialité";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={homeName} component={HomeScreen} />
        <Stack.Screen name={calendarName} component={CalendarScreen} />
        <Stack.Screen name={notificationsName} component={NotificationsScreen} />
        <Stack.Screen name={profileName} component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === homeName) {
            iconName = focused ? 'home' : 'home-outline';

          } else if (rn === calendarName) {
            iconName = focused ? 'calendar' : 'calendar-outline';

          } else if (rn === notificationsName) {
            iconName = focused ? 'notifications' : 'notifications-outline';

          } else if (rn === profileName) {
            iconName = focused ? 'person' : 'person-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'grey',
        tabBarLabelStyle: { paddingBottom: 10, fontSize: 10 },
        tabBarStyle: { padding: 10, height: 70 }
      })}
    >
      <Tab.Screen name={homeName} component={HomeScreen} options={({ navigation }) => ({
        headerTitleAlign: 'center'
      })} />
      <Tab.Screen name={calendarName} component={CalendarScreen} options={({ navigation }) => ({
        headerTitleAlign: 'center'
      })} />
      <Tab.Screen name={notificationsName} component={NotificationsScreen} options={({ navigation }) => ({
        headerTitleAlign: 'center'
      })} />
      <Tab.Screen name={profileName} component={ProfileScreen} options={({ navigation }) => ({
        headerTitleAlign: 'center'
      })} />
    </Tab.Navigator>
  );
}

export default MainContainer;