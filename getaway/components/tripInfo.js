import React, { useEffect, useState } from 'react';
import { Text, View, ImageBackground, StatusBar, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';


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


const TripInfo = () => {
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        fetch('http://10.0.0.118:8080/places')
        .then(response => response.json())
        .then(async data => {
            const firstFive = await Promise.all(data.slice(0, 24).map(async item => {
                const image = await getTypeImage(item.name, item.types);
                return {
                    ...item,
                    image,
                };
            }));
            setPlaces(firstFive);
        });
    }, []);

    console.log("rendered places ", places);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {places.map((place, index) => <TripItem key={index} type="fast-food" name={place.name} location={place}/>)}
            </ScrollView>
        </SafeAreaView>
    );
};

export const TripItem = ({type, name, location = {}}) => {
    const { image } = location;
    return (
        <View style={styles.itemContainer}>
            {image ? (
                <ImageBackground source={{uri: image}} style={styles.image} resizeMode="cover">
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