import React from 'react';
import { Text, View, ImageBackground, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';
import SearchScreen from './components/SearchScreen';
import LikeScreen from './components/LikeScreen';
import ProfileScreen from './ProfileScreen';
import TripMenu from './TripMenu'
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Search') {
                iconName = focused ? 'search' : 'search-outline';
              } else if (route.name === 'Likes') {
                iconName = focused ? 'heart' : 'heart-outline';
              } else if (route.name === 'Profile') {
                iconName = focused ? 'person-circle' : 'person-circle-outline';
              } else if (route.name === 'Test') {
                iconName = 'flask-outline'
              }

              return <Icon name={iconName} size={size} color={color} />;
            },

            tabBarActiveTintColor: '#FD9528',
            tabBarInactiveTintColor: '#10384a',
            tabBarStyle: { position: 'absolute' },
            tabBarShowLabel: false,
            headerShown: false,
          })}
          
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Search" component={SearchScreen} />
          <Tab.Screen name="Likes" component={LikeScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
          <Tab.Screen name="Test" component={TripMenu} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
