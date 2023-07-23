import React, { useState } from 'react';
import { StatusBar, ScrollView, Text, View, Image, SafeAreaView, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as ImagePicker from 'expo-image-picker';
import { states } from './components/LikeScreen';



export const FeedItem = ({state1, state2, text}) => (
  <View style={styles.socialMediaContainer}>
    <TouchableOpacity style={styles.profilePic}></TouchableOpacity>
    <View style={styles.contentArea}>
      <View style={styles.postTextArea}>
        <Text style={styles.postText}>{text}</Text>
      </View>

      <View style={styles.imgContainer}>
        <ImageBackground source={state1.image} style={styles.feedImg} resizeMode="cover"></ImageBackground>
          <Text style={styles.feedTitleText}>{state1.name}</Text>
          <Icon name="arrow-right" size={12} color="orange" style={styles.arrowIcon} />
        <ImageBackground source={state2.image} style={styles.feedImg} resizeMode="cover">
          <Text style={styles.feedTitleText}>{state2.name}</Text>
        </ImageBackground>
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
      <FeedItem state1={states.colorado} state2={states.california} text={"Went on an awesome trip to California"}/>
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
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      borderRadius: 2,
      borderWidth: 1,
      flexDirection: 'row',
      height: 100,
      width: '100%',
      borderColor: 'orange',

    },
    
    profilePic: {
      width: 65,
      height: 65,
      borderWidth: 1,
      borderRadius: 50,
      alignSelf: 'center',
      left: 5,

    },

    contentArea: {
      flexDirection: 'column',
      borderWidth: 1,
      borderRadius: 3,
      flex: 1,
      left: 10,
    },

    postTextArea: {
      height: 70,
      padding: 2
    },

    postText: {
      fontSize: 12,
    },

    imgContainer: {
      flex: 1,
      flexDirection: 'row',
    },
    feedImg: {
      width: 117
    },
    feedTitleText: {
      position: 'absolute',
      color: 'white',
      alignContent: 'center'
    },
    arrowIcon: {
      position: 'absolute',
      left: 100
    }
    
    

});

export default HomeScreen;