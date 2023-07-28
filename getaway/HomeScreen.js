import React, { useState } from 'react';
import { StatusBar, ScrollView, Text, View, Image, SafeAreaView, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as ImagePicker from 'expo-image-picker';
import { states } from './components/LikeScreen';



export const FeedItem = ({state1, state2, text, profile}) => (
  <View style={styles.socialMediaContainer}>
    <View style={styles.profileSection}>
      <View style={styles.profilePictureSection}>
        <TouchableOpacity style={styles.profilePicture}>
          <Image style={styles.profile} source={require('getaway/assets/generic_profile.jpg')}/>
        </TouchableOpacity>
      </View>
      <View style={styles.nameBox}>
        <View style={styles.textBox}>
          <Text style={styles.nameStyle}>Hunter</Text>
          <Text style={styles.mileStyle}>5280 Miles</Text>
        </View>
      </View>
    </View>
    <View style={styles.contentArea}>
      <TouchableOpacity style={styles.tripDest}>
        <Image style={styles.imageleft} source={states.colorado.image} resizeMode='cover'/>
        <Image style={styles.imageRight} source={states.newMexico.image} resizeMode='cover'/>
      </TouchableOpacity>

      <View style={styles.postView}></View>
    </View>
  </View>
);
const HomeScreen = () => (
    <View style={styles.container}>
      {/* Background Image can be changed */}
    <ImageBackground source={require('./assets/pietro-de-grandi-pidpjXuorPE-unsplash.jpg')} style={styles.image}>
    <View style={styles.takeATrip}>
      <Text style={styles.titleName}>GetAway</Text>
      <View style={{borderBottomColor: 'yellow', borderBottomWidth: 1, width: '60%',top: 10, alignSelf: 'center',}}/>
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
        width: '85%',
        borderWidth: 1,
        borderColor: 'yellow',
        top: -250,
        alignSelf: 'center',
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: 'rgba(255, 255, 255, 0.3)'
        
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
        height: 50,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'yellow',
        borderWidth: 1,
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
      height: 420,
      width: '90%',
      position: 'absolute',
      alignSelf: 'center',
      borderColor: 'yellow',
      borderRadius: 10,
    },

    socialMediaContainer: {
      backgroundColor: 'rgba(255, 255, 255, 0.6)',
      borderWidth: 1,
      flexDirection: 'row',
      height: 136,
      width: '100%',
      borderColor: 'orange',
      marginVertical: 2,
      borderRadius: 10,

    },
    profileSection: {
      width: '30%',
      flexDirection: 'column',
      height: '100%',
    },

    profilePictureSection: {
      width: '100%',
      height: '60%',

      position: 'absolute',
      justifyContent: 'center',
      alignItems: "center",
    },
    profilePicture: {
      width: 75,
      height: 75,
      borderRadius: 50,
      borderWidth: 1,
      borderColor: 'yellow',

    },
    profile: {
      width: 72,
      height: 73,
      borderRadius: 50,
      alignSelf: 'center',
    },
    nameBox: {
      width: '100%',
      height: '50%',

      alignSelf: 'center',
      position: 'absolute',
      top: 70,
      justifyContent: 'center',

    },
    textBox: {
      width: '70%',
      height: '63%',
      borderWidth: 2,
      alignSelf: 'center',
      flexDirection : 'column',
      justifyContent: 'center',
      alignContent: 'center',
      borderRadius: 20,
      borderColor: 'yellow',
      backgroundColor: 'rgba(255, 255, 255, 0.5)'
    },

    nameStyle: {
      fontSize: 10,
      alignSelf: 'center',
      marginVertical : 2,
      color: 'black'
    },
    mileStyle: {
      fontSize : 8,
      alignSelf: 'center',
      color: 'black'
    },

    contentArea: {
      flex: 1,
      borderWidth: 1,
      flexDirection: 'column'
    },

    tripDest: {
      width: '90%',
      height: 40,
      borderWidth: 1,
      alignSelf: 'center',
      top: 5,
      borderRadius: 10,
      flexDirection: 'row',
      overflow: 'hidden'
      
    },
    imageleft: {
      flex: 1,
      height: '100%',
      borderRadius: 9,
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
    },
    imageRight: {
      flex: 1,
      height: '100%',
      borderRadius: 9,
      borderBottomLeftRadius: 0,
      borderTopLeftRadius: 0,
    },

    postView: {
      height: '65%',
      width: '90%',
      alignSelf: 'center',
      borderWidth: 1,
      top: 6,
      borderRadius: 10
    }
    
    

});

export default HomeScreen;