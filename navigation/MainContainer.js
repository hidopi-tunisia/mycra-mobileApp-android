import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
<<<<<<< HEAD
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity, View, Text } from 'react-native';
=======
import Menu, {MenuItem, MenuDivider} from 'react-native-material-menu';
import Ionicons from 'react-native-vector-icons/Ionicons';
>>>>>>> 673a54afe9fa6445fcfdd065256c776c9d631a21

// Screens
import HomeScreen from './screens/HomeScreen';
import CalendarScreen from './screens/CalendarScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import ProfileScreen from './screens/ProfileScreen';
<<<<<<< HEAD
import AboutScreen from './screens/AboutScreen';
import LegalScreen from './screens/LegalScreen';
import PrivacyScreen from './screens/PrivacyScreen';
=======
>>>>>>> 673a54afe9fa6445fcfdd065256c776c9d631a21

//Screen names
const homeName = "Accueil";
const calendarName = "Calendrier";
const notificationsName = "Notifications";
const profileName = "Profil";
<<<<<<< HEAD
const aboutName = "A propos";
const legalName = "Mentions légales";
const privacyScreen = "Politique de confidentialité";
=======

>>>>>>> 673a54afe9fa6445fcfdd065256c776c9d631a21

const Tab = createBottomTabNavigator();

function MainContainer() {
<<<<<<< HEAD
  const renderMenu = (navigation) => (
    <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
      <Ionicons name="menu" size={30} color="black" style={{ marginRight: 20 }} />
    </TouchableOpacity>
  );

  const MenuStack = () => (
    <Stack.Navigator>
      <Stack.Screen name="About" component={AboutScreen} />
      <Stack.Screen name="Legal" component={LegalScreen} />
      <Stack.Screen name="Privacy" component={PrivacyScreen} />
    </Stack.Navigator>
  );

=======
>>>>>>> 673a54afe9fa6445fcfdd065256c776c9d631a21
  return (
    <NavigationContainer>
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
          tabBarStyle: { padding: 10, height: 70}
        })}
      >
        <Tab.Screen name={homeName} component={HomeScreen} options={({ navigation }) => ({
          headerTitleAlign: 'center',
          headerRight: () => renderMenu(navigation)
        })} />
        <Tab.Screen name={calendarName} component={CalendarScreen} options={({ navigation }) => ({
          headerTitleAlign: 'center',
          headerRight: () => renderMenu(navigation)
        })} />
        <Tab.Screen name={notificationsName} component={NotificationsScreen} options={({ navigation }) => ({
          headerTitleAlign: 'center',
          headerRight: () => renderMenu(navigation)
        })} />
        <Tab.Screen name={profileName} component={ProfileScreen} options={({ navigation }) => ({
          headerTitleAlign: 'center',
          headerRight: () => renderMenu(navigation)
        })} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;
