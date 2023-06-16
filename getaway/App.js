import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function App() {
  return (
    
      <View style={styles.container}>
        <ImageBackground source={require('./assets/pietro-de-grandi-pidpjXuorPE-unsplash.jpg')} style={styles.image}>
        <View style={styles.takeATrip}>
          <Text style={styles.titleName}>Get Away</Text>
          <TripButtons/>
        </View>
        </ImageBackground>
        <StatusBar style="auto" />
        <View style={styles.line}/>
        <ButtonHub/>
      
      </View>
    
  );
}
// Button Hub
const ButtonHub = () => {
  const [homePressed, setHomePressed] = useState(false);
  const [searchPressed, setSearchPressed] = useState(false);
  const [likePressed, setLikePressed] = useState(false);
  const [profilePressed, setProfilePressed] = useState(false);
  return (
  <View style={styles.hub}>
    <View style={styles.button}>
    <Icon.Button 
      name="home"
      backgroundColor="white"
      size={30}
      color={homePressed ? '#FD9528' : '#10384a'}
      onPress={() => {
        console.log('Home Button Pressed');
        setHomePressed(!homePressed); // Toggle the pressed state
      }}
    />
    </View>
    
    <View style={styles.button}>
    <Icon.Button
      name="search"
      backgroundColor="white"
      size={30}
      color={searchPressed ? '#FD9528' : '#10384a'}
      onPress={() => {
        console.log("Search Pressed");
        setSearchPressed(!searchPressed);
      }}
    />
    </View>
    <View style={styles.button}>
    <Icon.Button
      name="heart"
      backgroundColor="white"
      size={30}
      color={likePressed ? '#FD9528' : '#10384a'}
      onPress={() => {
        console.log('Like button Pressed');
        setLikePressed(!likePressed);
      }}/>
    </View>
    <View style={styles.button}>
    <Icon.Button
      name="person-circle-outline"
      backgroundColor="white"
      size={30}
      color={profilePressed ? '#FD9528' : '#10384a'}
      onPress={() => {
        console.log("Profile Button Pressed");
        setProfilePressed(!profilePressed);
        }}
      />
    </View>
    
  </View>
  );
};
const TripButtons = () => (
  <View style={styles.tripButtons}>
    <TouchableOpacity style={styles.topButton}>
      <Text style={styles.topButtonText}>Generate Trip</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.topButton}>
      <Text style={styles.topButtonText}>Plan Route</Text>
    </TouchableOpacity>
  </View>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hub: {
    flexDirection: 'row',
    bottom: 40,
    position: 'absolute',
    width: '100%'
  },
  button: {
    flex: 1,
    alignItems: 'center',
    
  },
  titleName: {
    fontSize: 55,
    alignSelf: 'center',
    paddingTop: 15,
    color: '#002527'
  },
  line: {
    position: 'absolute',
    bottom: 90,
    width: '100%',
    borderTopWidth: 1,
    borderColor: 'grey',
  },
  takeATrip: {
    height: '25%',
    width: '80%',
    borderWidth: 1,
    borderColor: 'grey',
    marginTop: -450,
    alignSelf: 'center',
    borderRadius: 10,
    overflow: 'hidden',
  },
  tripButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    paddingBottom: 25,
    width: '100%',
    height: '100%',
    alignItems: 'flex-end',
    position: 'absolute',
  },
  topButton: {
    backgroundColor: '#FD9528',
    width: 110,
    height: 60,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topButtonText: {
    color: 'white',
  },
  image: {
    width: '100%',
    height: '100%',
    justifyContent: "center",
    paddingBottom: 91,
  },
});
