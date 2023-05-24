import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { MenuProvider, Menu, MenuTrigger, MenuOptions, MenuOption } from 'react-native-popup-menu';

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
    <MenuProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Tabs" component={TabNavigator} options={{ headerShown: false }} />
          <Stack.Screen name={aboutName} component={AboutScreen} />
          <Stack.Screen name={legalName} component={LegalScreen} />
          <Stack.Screen name={privacyName} component={PrivacyScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </MenuProvider>
  );
}

function TabNavigator() {
  const navigation = useNavigation();

  const renderScreenOptions = ({ route }) => {
    const iconName = route.name === homeName ? 'home' :
      route.name === calendarName ? 'calendar' :
      route.name === notificationsName ? 'notifications' :
      route.name === profileName ? 'person' : '';

    return {
      tabBarIcon: ({ focused, color, size }) => (
        <Ionicons name={focused ? iconName : iconName + '-outline'} size={size} color={color} />
      ),
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'grey',
      tabBarLabelStyle: { paddingBottom: 10, fontSize: 10 },
      tabBarStyle: { padding: 10, height: 70 },
      headerTitleAlign: 'center',
      headerRight: () => renderMenu(navigation, route)
    };
  };

  const renderMenu = (navigation, route) => {
    return (
      <View style={styles.menuContainer}>
        <Menu>
          <MenuTrigger>
            <Ionicons name="ellipsis-vertical" size={24} color="black" />
          </MenuTrigger>
          <MenuOptions>
            <MenuOption onSelect={() => navigation.navigate(aboutName)} text="A propos" />
            <MenuOption onSelect={() => navigation.navigate(legalName)} text="Mentions légales" />
            <MenuOption onSelect={() => navigation.navigate(privacyName)} text="Politique de confidentialité" />
          </MenuOptions>
        </Menu>
      </View>
    );
  };

  return (
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={renderScreenOptions}
    >
      <Tab.Screen name={homeName} component={HomeScreen} />
      <Tab.Screen name={calendarName} component={CalendarScreen} />
      <Tab.Screen name={notificationsName} component={NotificationsScreen} />
      <Tab.Screen name={profileName} component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  menuContainer: {
    marginRight: 10,
  },
});

export default MainContainer;