import React from 'react';
import { FlatList, SectionList, SafeAreaView, Text, View, ImageBackground, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const states = {
    alabama: { name: 'Alabama', image: require('getaway/assets/state_images/alabama.jpg') },
    alaska: { name: 'Alaska', image: require('getaway/assets/state_images/alaska.jpg') },
    arizona: { name: 'Arizona', image: require('getaway/assets/state_images/arizona.jpg') },
    arkansas: { name: 'Arkansas', image: require('getaway/assets/state_images/arkansas.jpg') },
    california: { name: 'California', image: require('getaway/assets/state_images/california.jpg') },
    colorado: { name: 'Colorado', image: require('getaway/assets/state_images/colorado.jpg') },
    connecticut: { name: 'Connecticut', image: require('getaway/assets/state_images/connecticut.jpg') },
    delaware: { name: 'Delaware', image: require('getaway/assets/state_images/delaware.jpg') },
    florida: { name: 'Florida', image: require('getaway/assets/state_images/florida.jpg') },
    georgia: { name: 'Georgia', image: require('getaway/assets/state_images/georgia.jpg') },
    hawaii: { name: 'Hawaii', image: require('getaway/assets/state_images/hawaii.jpg') },
    idaho: { name: 'Idaho', image: require('getaway/assets/state_images/idaho.jpg') },
    illinois: { name: 'Illinois', image: require('getaway/assets/state_images/illinois.jpg') },
    indiana: { name: 'Indiana', image: require('getaway/assets/state_images/indiana.jpg') },
    iowa: { name: 'Iowa', image: require('getaway/assets/state_images/iowa.jpg') },
    kansas: { name: 'Kansas', image: require('getaway/assets/state_images/kansas.jpg') },
    kentucky: { name: 'Kentucky', image: require('getaway/assets/state_images/kentucky.jpg') },
    louisiana: { name: 'Louisiana', image: require('getaway/assets/state_images/louisiana.jpg') },
    maine: { name: 'Maine', image: require('getaway/assets/state_images/maine.jpg') },
    maryland: { name: 'Maryland', image: require('getaway/assets/state_images/maryland.jpg') },
    massachusetts: { name: 'Massachusetts', image: require('getaway/assets/state_images/massachusetts.jpg') },
    michigan: { name: 'Michigan', image: require('getaway/assets/state_images/michigan.jpg') },
    minnesota: { name: 'Minnesota', image: require('getaway/assets/state_images/minnesota.jpg') },
    mississippi: { name: 'Mississippi', image: require('getaway/assets/state_images/mississippi.jpg') },
    missouri: { name: 'Missouri', image: require('getaway/assets/state_images/missouri.jpg') },
    montana: { name: 'Montana', image: require('getaway/assets/state_images/montana.jpg') },
    nebraska: { name: 'Nebraska', image: require('getaway/assets/state_images/nebraska.jpg') },
    nevada: { name: 'Nevada', image: require('getaway/assets/state_images/nevada.jpg') },
    newHampshire: { name: 'New Hampshire', image: require('getaway/assets/state_images/new-hampshire.jpg') },
    newJersey: { name: 'New Jersey', image: require('getaway/assets/state_images/new-jersey.jpg') },
    newMexico: { name: 'New Mexico', image: require('getaway/assets/state_images/new-mexico.jpg') },
    newYork: { name: 'New York', image: require('getaway/assets/state_images/new-york.jpg') },
    northCarolina: { name: 'North Carolina', image: require('getaway/assets/state_images/north-carolina.jpg') },
    northDakota: { name: 'North Dakota', image: require('getaway/assets/state_images/north-dakota.jpg') },
    ohio: { name: 'Ohio', image: require('getaway/assets/state_images/ohio.jpg') },
    oklahoma: { name: 'Oklahoma', image: require('getaway/assets/state_images/oklahoma.jpg') },
    oregon: { name: 'Oregon', image: require('getaway/assets/state_images/oregon.jpg') },
    pennsylvania: { name: 'Pennsylvania', image: require('getaway/assets/state_images/pennsylvania.jpg') },
    rhodeIsland: { name: 'Rhode Island', image: require('getaway/assets/state_images/rhode-island.jpg') },
    southCarolina: { name: 'South Carolina', image: require('getaway/assets/state_images/south-carolina.jpg') },
    southDakota: { name: 'South Dakota', image: require('getaway/assets/state_images/south-dakota.jpg') },
    tennessee: { name: 'Tennessee', image: require('getaway/assets/state_images/tennesee.jpg') },
    texas: { name: 'Texas', image: require('getaway/assets/state_images/texas.jpg') },
    utah: { name: 'Utah', image: require('getaway/assets/state_images/utah.jpg') },
    vermont: { name: 'Vermont', image: require('getaway/assets/state_images/vermont.jpg') },
    virginia: { name: 'Virginia', image: require('getaway/assets/state_images/virginia.jpg') },
    washington: { name: 'Washington', image: require('getaway/assets/state_images/washington.jpg') },
    westVirginia: { name: 'West Virginia', image: require('getaway/assets/state_images/west-virginia.jpg') },
    wisconsin: { name: 'Wisconsin', image: require('getaway/assets/state_images/wisconsin.jpg') },
    wyoming: { name: 'Wyoming', image: require('getaway/assets/state_images/wyoming.jpg') }
};

const Item = ({ state1, state2 }) => (
    <View style={styles.itemContainer}>
        <ImageBackground source={state1.image} style={styles.image} resizeMode="cover">
            <Text style={styles.destinationText}>{state1.name}</Text>
        </ImageBackground>
        
        <Icon name="car" size={30} color="orange" style={styles.arrowIcon} />
        
        <ImageBackground source={state2.image} style={styles.image} resizeMode="cover">
            <Text style={styles.destinationText}>{state2.name}</Text>
        </ImageBackground>
    </View>
);

const LikeScreen = () => (
    <SafeAreaView style={styles.container}>
        <Item state1={states.colorado} state2={states.kansas} />
        <Item state1={states.hawaii} state2={states.arizona} />
        <Item state1={states.southCarolina} state2={states.nevada} />
        <Item state1={states.colorado} state2={states.newYork}/>
    </SafeAreaView>
);

const styles = StyleSheet.create({
    header: {
        fontSize: 32,
        backgroundColor: "#f5f5f5",
        fontWeight: 'bold',
    },
    headerContainer: {
        backgroundColor: "#f5f5f5",
        padding: 10,
        margin: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ddd',
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
    item: {
        fontSize: 24,
        color: '#333',
        padding: 10,
    },
    image: {
        width: 180,
        height: 100,
    },
    destinationText: {
        position: 'absolute',
        top: 50,
        left: 0,
        width: '100%',
        height: 100,
        textAlign: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0,5)',
        color: '#fff',
        fontSize: 24,
    },
    arrowIcon: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        zIndex: 1,
    },
    
});

export default LikeScreen;
