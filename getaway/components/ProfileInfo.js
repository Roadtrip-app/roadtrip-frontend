import React from 'react';
import { Text, View, ImageBackground, StatusBar, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ProfileScreen = () => (
    <View style={styles.container}>
        <View style={styles.profileItem}>
            <Icon style={styles.searchIcon} name="person-sharp" size={20} color="black"/>
            <Text style={styles.profileText}>Hunter DeArment</Text>
        </View>
        <View style={styles.profileItem}>
            <Icon style={styles.searchIcon} name="calendar-sharp" size={20} color="black"/>
            <Text style={styles.profileText}>May 26</Text>
        </View>
        <View style={styles.profileItem}>
            <Icon style={styles.searchIcon} name="phone-portrait-sharp" size={20} color="black"/>
            <Text style={styles.profileText}>7205193019</Text>
        </View>
        <View style={styles.profileItem}>
            <Icon style={styles.searchIcon} name="mail-sharp" size={20} color="black"/>
            <Text style={styles.profileText}>hdear@gmail.com</Text>
        </View>
        <View style={styles.profileItem}>
            <Icon style={styles.searchIcon} name="bookmarks" size={20} color="black"/>
            <Text style={styles.profileText}>Mexican Food</Text>
        </View>
        <View style={styles.profileItem}>
            <Icon style={styles.searchIcon} name="location-sharp" size={20} color="black"/>
            <Text style={styles.profileText}>Denver</Text>
        </View>
    </View>
);


const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        alignItems: "flex-start",
        marginTop: "45%",
        marginRight: "45%",
    },
    
    profileItem: {
        flexDirection: "row",
        padding: 25,
        alignItems: "center",
        flexWrap: 'wrap'
    },

    searchIcon: {
        marginRight: 10,
    },

    profileText: {
         textAlign: 'center',
         left: 30,
    },
});
export default ProfileScreen;