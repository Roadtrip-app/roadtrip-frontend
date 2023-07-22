import React from 'react';
import { Text, View, ImageBackground, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { createStackNavigator} from '@react-navigation/stack';



import HomeScreen from './HomeScreen';
import SearchScreen from './components/SearchScreen';
import LikeScreen from './components/LikeScreen';
import ProfileScreen from './ProfileScreen';
import TripInfo from './components/tripInfo';
import TripMenu from './TripMenu'
const Tab = createBottomTabNavigator();
const LikeStack = createStackNavigator();

// Navigation between Like screen and trip object
function LikeStackNavigator() {
  return (
    <LikeStack.Navigator>
      <LikeStack.Screen name="Likes" component={LikeScreen}/>
      <LikeStack.Screen name="TripInfo" component={TripInfo}/>
    </LikeStack.Navigator>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* Navigation hub for bottom to different screens */}
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
          <Tab.Screen name="Likes" component={LikeStackNavigator} />
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
