import React from 'react';
import {useState} from 'react';
import {Button, Text, View, Image, ImageBackground, StatusBar, StyleSheet, TouchableOpacity} from 'react-native';
import ImagePicker from 'react-native-image-picker';

const ProfileScreen = () => {
    const [profileSource, setProfile] = useState(null);

    const selectImage = () => {
        const options = {
            noData: true,
        };

    ImagePicker.launchImageLibrary(options, response => {
        console.log('Response = ', response);

        if (response.didCancel) {
            console.log("User Cancelled Image Selection");
        } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
        } else {
            const source = {uri: response.uri};
            setProfile(source);
        }
    });
};
    return (
    <View style={styles.container}>
        <View style={styles.banner}></View>
        <View style={styles.profilePictureContainer}>
            <Image source={require('./assets/young_adult_man_blue_shirt_smiling.jpg')} style={styles.profilePicture}/>
        </View>
        <View style={styles.pictureHub}>
            <Text>Test</Text>
        </View>
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
    },

    profilePictureContainer: {
        position: 'absolute',
        top: 100,
        zIndex: 1,
    },

    profilePicture: {
        borderColor: 'grey',
        borderWidth: 2,
        width: 100,  // replace with the size you want
        height: 100, // replace with the size you want
        borderRadius: 90,  // half of your width and height
        overflow: 'hidden',
    },

    profileName: {
        top: 220,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center'
    },

    pictureHub: {

    },

    banner: {
        borderWidth: 1,
        height: 117,
        width: '100%',
        position: 'absolute',
        top: 35
    },
});

export default ProfileScreen;