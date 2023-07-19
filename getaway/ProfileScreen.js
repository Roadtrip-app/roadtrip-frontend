import React, { useState } from 'react';
import { Button, Text, View, Image, ImageBackground, StatusBar, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/Ionicons';

import Community from './components/Community';
import Favorites from './components/Favorites';
import MyPost from './components/MyPost';
import ProfileInfo from './components/ProfileInfo';

const ProfileScreen = () => {
    const [profileSource, setProfile] = useState(null);
    const [selectedTab, setSelectedTab] = useState(0);

    const handleTabPress = (tabIndex) => {
        setSelectedTab(tabIndex);
    };

    return (
    <SafeAreaView style={styles.container}>
        <View style={styles.banner}>
        <Icon style={styles.searchIcon} name="settings-sharp" size={20} color="black"/>
        </View>
        <View style={styles.profilePictureContainer}>
            <Image source={require('./assets/young_adult_man_blue_shirt_smiling.jpg')} style={styles.profilePicture}/>
        </View>
        <View style={styles.profileName}>
            <Text style={styles.nameText}>Hunter DeArment</Text>
            <Text style={styles.dateJoined}>1526 Miles Traveled</Text>
        </View>
        <View style={styles.tabsContainer}>
            {["My Post", "Favorites", "Community", "Profile"].map((tab, index) => (
                <TouchableOpacity
                    key={index}
                    style={styles.tabItem}
                    onPress={() => handleTabPress(index)}
                >
                    <View>
                        <Text style={[styles.tabText, selectedTab === index && styles.activeTab]}>{tab}</Text>
                        {selectedTab === index && <View style={styles.tabUnderline}/>}
                    </View>
                </TouchableOpacity>
            ))}
            

        </View>

        <View style={styles.contentBox}>
            {selectedTab === 0 && <MyPost />}
            {selectedTab === 1 && <Favorites />}
            {selectedTab === 2 && <Community />}
            {selectedTab === 3 && <ProfileInfo />}
        </View>


    </SafeAreaView>

    
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    profilePictureContainer: {
        position: 'absolute',
        top: 100,
        zIndex: 1,
    },
    
    tabsContainer: {
        flexDirection: 'row',
        top: '41%',
        height: '6.32%',
        
    },

    tabItem: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        
    },

    tabInner: {
        alignItems: 'center'
    },

    activeTab: {
        
    },

    tabUnderline: {
        height: 2,
        backgroundColor: 'orange',
    },
    
    tabText: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    profilePicture: {
        borderColor: 'orange',
        borderWidth: 2,
        width: 100,  
        height: 100, 
        borderRadius: 90,  
        overflow: 'hidden',
    },

    profileName: {
        flexDirection: 'column',
        top: "21%",
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderRadius: 2,
        borderWidth: 1,
        height: 50,
        width: 150,
        borderColor: 'red',

    },

    
    userInfo: {
        flexDirection: 'row',
        height: '80%',
        top: '-100%',
    },

    banner: {
        borderWidth: 1,
        height: 117,
        width: '101%',
        position: 'absolute',
        top: 35,
        borderColor: 'orange',
    },

    searchIcon: {
        left: "92%",
        top: "5%"
    },

    nameText: {
        fontSize: 10,
    },

    dateJoined: {
        fontSize: 8,
    },
    
});

export default ProfileScreen;