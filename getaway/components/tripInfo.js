import React, { useEffect, useState } from 'react';
import { Text, View, ImageBackground, StatusBar, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';

export const newStates = {
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

export const locations = {
    bar: {name: 'bar', image: require('getaway/assets/food_images/bar.jpg')},
    rest: {name: 'restaurant', image: require('getaway/assets/food_images/rest.jpg')},
    poi: {name: 'poi', image: require('getaway/assets/poi/unionstation.jpg')},
    lodging: {name: 'lodging', image: require('getaway/assets/poi/lodging.jpg')},
    cafe: {name: 'cafe', image: require('getaway/assets/food_images/cafe.jpg')},
};

const PEXELS_API_URL = 'https://api.pexels.com/v1/search';
const PEXELS_API_KEY = 'VOsTj5BppHuYrrBuFYHjmGqe9kqUuChSmdmKV2hqGPJHZvz0HLYR8DIl'; // Remember to replace it with your actual API key

const getImageFallback = (types) => {
    const type = types.find(type => ['bar', 'restaurant', 'point_of_interest', 'cafe', 'lodging'].includes(type));
    switch (type) {
        case 'bar':
            return locations.bar.image;
        case 'restaurant':
            return locations.rest.image;
        case 'point_of_interest':
            return locations.poi.image;
        case 'cafe':
            return locations.cafe.image;
        case 'lodging':
            return locations.lodging.image;
        default:
            return locations.mexican.image; // Provide a default image
    }
};

// Modify getTypeImage to fetch from Pexels
// Modify getTypeImage to fetch from Pexels
const getTypeImage = async (name, types) => {
    let imageUrl = null;
    try {
        const response = await axios.get(PEXELS_API_URL, {
            headers: {
                Authorization: PEXELS_API_KEY,
            },
            params: {
                query: name,
                per_page: 1,
            },
        });
        const photos = response.data.photos;
        if (photos.length > 0) {
            imageUrl = photos[0].src.large; // Use the large-sized photo
        }
    } catch (error) {
        console.error('Error fetching image from Pexels:', error);
    }

    // If no image from Pexels, get fallback image
    if (!imageUrl) {
        imageUrl = getImageFallback(types);
    }
    
    return imageUrl;
};


const TripInfo = ({ route, navigation }) => {
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        fetch('http://10.0.0.118:8080/places')
        .then(response => response.json())
        .then(async data => {
            const firstFive = await Promise.all(data.slice(2, 8).map(async item => {
                const image = await getTypeImage(item.name, item.types);
                return {
                    ...item,
                    image,
                };
            }));
            setPlaces(firstFive);
        });
    }, []);

    



    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <StartItem name={route.params.state1.name} type="arrow-forward" startOrEnd={true} route={route}/>
                
                {places.map((place, index) => <TripItem key={index} type="fast-food" name={place.name} location={place}/>)}
                <StartItem name={route.params.state2.name} type="pin" startOrEnd={false} route={route}/>
            </ScrollView>
        </SafeAreaView>
    );
};






export const StartItem = ({name, type, startOrEnd, route = {}}) => {
    let name1 = route.params.state1.name;
    let name2 = route.params.state2.name;

    let key1 = name1.toLowerCase();
    let key2 = name2.toLowerCase();

    let start = newStates[key1];
    let end = newStates[key2];

    let state;

    if (startOrEnd) {
        state = start;
    }
    else {
        state = end;
    }

    return (
        <View style={styles.itemContainer}> 
                <ImageBackground source={state.image} style={styles.image} resizeMode="cover">
                    <Icon style={styles.searchIcon} name={type} size={25} color="black"/>
                    <Text style={styles.destinationText}>{name}</Text>
                </ImageBackground>
        </View>
    );

};

export const TripItem = ({type, name, location = {}}) => {
    const { image } = location;
    return (
        <View style={styles.itemContainer}>
            {image ? (
                <ImageBackground source={{uri:image}} style={styles.image} resizeMode="cover">
                    <Icon style={styles.searchIcon} name={type} size={25} color="black"/>
                    <Text style={styles.destinationText}>{name}</Text>
                </ImageBackground>
            ) : (
                <ImageBackground source={locations.default.image} style={styles.image} resizeMode="cover">
                    <Icon style={styles.searchIcon} name={type} size={25} color="black"/>
                    <Text style={styles.destinationText}>{name}</Text>
                </ImageBackground>
            )}
        </View>
    );
};


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