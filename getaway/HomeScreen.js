import React, { useState } from 'react';
import { StatusBar, ScrollView, Text, View, Image, SafeAreaView, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as ImagePicker from 'expo-image-picker';
import { states } from './components/LikeScreen';



export const FeedItem = ({state1, state2}) => (
  <View style={styles.socialMediaContainer}>
    <TouchableOpacity style={styles.profilePic}></TouchableOpacity>
    <View style={styles.contentArea}>
      <View style={styles.toFrom}>
        <View style={styles.imgContain}>
          <ImageBackground source={state1.image} style={styles.img}>
            <Text style={styles.feedTitleText}>{state1.name}</Text>
            <View style={styles.iconArrowContainer}>
              <Icon name="arrow-right" size={10} color="orange" style={styles.arrowIcon} /> 
            </View>
          </ImageBackground>
        </View>
        
        <View style={styles.imgContain}>
          <ImageBackground source={state2.image} style={styles.img}>
            <Text style={styles.feedTitleText}>{state2.name}</Text>
          </ImageBackground>
        </View>

      </View>
      <View style={styles.postArea}>
        <Text style={styles.postText}>Went on a awesome trip! Saw a lot of cool stuff, and ate a ton of great food check it out!</Text>
      </View>
    </View>
  </View>
);
const HomeScreen = () => (
    <View style={styles.container}>
      {/* Background Image can be changed */}
    <ImageBackground source={require('./assets/pietro-de-grandi-pidpjXuorPE-unsplash.jpg')} style={styles.image}>
    <View style={styles.takeATrip}>
      <Text style={styles.titleName}>GetAway</Text>
      <TripButtons/>
    </View>

    <ScrollView style={styles.Feed}>
      <FeedItem state1={states.colorado} state2={states.california}/>
      <FeedItem state1={states.georgia} state2={states.alabama}/>
      <FeedItem state1={states.washington} state2={states.maine}/>
      <FeedItem state1={states.texas} state2={states.minnesota}/>
    </ScrollView>
    </ImageBackground>
    
  </View>
);
// Trip Buttons
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

    socialMediaContainer: {
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      borderRadius: 2,
      borderWidth: 1,
      flexDirection: 'row',
      height: '30%',
      width: '100%',
      borderColor: 'orange',

    },
    
    profilePic: {
      width: 70,
      height: 70,
      borderWidth: 1,
      borderRadius: 50,
      alignSelf: 'center',
      left: 10,

    },

    contentArea: {
      flexDirection: 'column',
    },
    
    toFrom: {
      flexDirection: 'row',

      height: 22,
      left: 15,
      top: 1

    },
    imgContain: {
      
    },
    
    img: {
      width: 110,
      height: 25,
      borderWidth: 1,
      zIndex: 1
    },
    feedTitleText: {
      color: 'black',
      alignSelf: 'center',
      backgroundColor: 'rgba(255, 255, 255, 0.7)',
      borderColor: 'black',
      borderWidth: 1,
      borderRadius: 5,
    },
    postArea: {
      borderRadius: 5,
      left: 15,
      width: '100%',
      height: 75,
      top: 35,
      position: 'absolute'
    },
    postText: {
      fontSize: 12
    },
    iconArrowContainer: {
      left: 100,
      bottom: 15,
      zIndex: 2,
    }

});

export default HomeScreen;