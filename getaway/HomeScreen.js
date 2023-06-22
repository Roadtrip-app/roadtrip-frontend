import React from 'react';
import { Text, View, ImageBackground, StatusBar, StyleSheet, TouchableOpacity} from 'react-native';
import { BlurView } from '@react-native-community/blur';

const HomeScreen = () => (
    <View style={styles.container}>
    <ImageBackground source={require('./assets/pietro-de-grandi-pidpjXuorPE-unsplash.jpg')} style={styles.image}>
    <View style={styles.takeATrip}>
      <Text style={styles.titleName}>GetAway</Text>
      <TripButtons/>
    </View>

    <View style={styles.Feed}></View>
    </ImageBackground>
    <StatusBar style="auto" />
    
  </View>
);

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
    button: {
        flex: 1,
        alignItems: 'center',

    },
    titleName: {
        fontSize: 55,
        alignSelf: 'center',
        paddingTop: 15,
        color: '#FD9528',
        fontFamily: 'Cochin',
        textShadowColor: 'black',
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
        borderColor: 'orange',
        top: -250,
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
        fontFamily: 'Cochin',
    },
    image: {
        width: '100%',
        height: '100%',
        justifyContent: "center",
    },
    Feed: {
      borderWidth: 1,
      top: 300,
      height: 400,
      width: '80%',
      position: 'absolute',
      alignSelf: 'center',
      borderColor: 'orange',
      borderRadius: 10,
    },

});

export default HomeScreen;