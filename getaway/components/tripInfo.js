import React from 'react';
import { Text, View, ImageBackground, StatusBar, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const locations = {
    mexican: { name: 'Mexican Food', image: require('getaway/assets/food_images/mexican.jpg') },
    lv: {name: "Las Vegas", image: require('getaway/assets/cities/lv.jpg')},
    parkCity: {name: "Park City", image: require("getaway/assets/cities/parkCity.jpg")},
    Zion: {name: "Zion National Park", image: require("getaway/assets/poi/zion.jpg")},
    Denver: {name: "Denver", image: require("getaway/assets/state_images/colorado.jpg")},
};
const TripInfo = () => (
    <SafeAreaView style={styles.container}>
        <ScrollView>
            <TripItem type="arrow-forward" name="Denver" location={locations.Denver}/>
            <TripItem type="fast-food" name="Chipolte" location={locations.mexican}/>
            <TripItem type="location" name="Zion Nation Park" location={locations.Zion}/>
            <TripItem type="business" name="Park City" location={locations.parkCity}/>
            <TripItem type="arrow-back" name="Las Vegas" location={locations.lv}/>
        </ScrollView>
    </SafeAreaView>
);

export const TripItem = ({type, name, location}) => (
    <View style={styles.itemContainer}>
        <ImageBackground source={location.image} style={styles.image} resizeMode="cover">
            <Icon style={styles.searchIcon} name={type} size={25} color="black"/>
            <Text style={styles.destinationText}>{location.name}</Text>
        </ImageBackground>
    </View>
);


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'grey',
        justifyContent: 'center',
    },
    itemContainer: {
        backgroundColor: "#fff",
        padding: 10,
        marginHorizontal: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        width:'100%',
        height: 100,
    },
    destinationText: {
        alignSelf: 'center',
        top: 40,
        color: 'black',
        fontSize: 24,
        borderWidth: 2,
        backgroundColor:'rgba(255, 255, 255, 0.5)',
        borderRadius: 5,
    },
    searchIcon: {
        alignSelf: 'center'
    },
});

export default TripInfo;