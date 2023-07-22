import React, { useState } from 'react';
import { ScrollView, Text, View, Image, SafeAreaView, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import * as ImagePicker from 'expo-image-picker';
import {states } from 'getaway/components/LikeScreen';

export const SmallItem = ({ state1, state2, tripInfo, navigation }) => (
    <View style={styles.itemContainer}>
        <ImageBackground source={state1.image} style={styles.image} resizeMode="cover">
            <Text style={styles.destinationText}>{state1.name}</Text>
        </ImageBackground>
        
        <ImageBackground source={state2.image} style={[styles.image, { marginLeft: 0 }]} resizeMode="cover">
            <Text style={styles.destinationText}>{state2.name}</Text>
        </ImageBackground>

        <TouchableOpacity 
            style={styles.btn}
            onPress={() => navigation.navigate('TripInfo', { trip: tripInfo })}
        >
            <Icon name="car" size={20} color="orange" style={styles.arrowIcon} />
        </TouchableOpacity>
    </View>
);


const ProfileScreen = () => {
    const [image, setImage] = useState(null);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });

        console.log(result);

        if(!result.cancelled) {
            setImage(result.uri);
        }
    };

    

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topView}>
                <ImageBackground source={require("getaway/assets/poi/zion.jpg")} style={styles.br}>
                <Icon style={styles.searchIcon} name="settings-outline" size={20} color="black"/>
                <TouchableOpacity onPress={pickImage} style={styles.profilePicture}>
                    {image ? <Image style={styles.profileImage} source={{uri: image}} /> : null}
                </TouchableOpacity>
                <View style={styles.profileInfo}>
                    <Text>Hunter</Text>
                    <Text>2530 Miles </Text>
                    <Text>Denver</Text>
                </View>
                <View style={styles.titleBar}>
                    <Text>Trips</Text>
                </View>
                </ImageBackground>
            </View>
            
            
            <ScrollView style={styles.bottomView}>
                <SmallItem state1={states.hawaii} state2={states.arizona} />
                <SmallItem state1={states.southDakota} state2={states.alabama} />
                <SmallItem state1={states.maine} state2={states.georgia} />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      alignItems: 'center',
      alignContent: 'center'
    },
    topView: {
        position: 'relative',
        width: '100%',
        height: '50%',
        backgroundColor: 'white',
        alignItems: 'center',
    },
    bottomView: {
        position: 'relative',
        width: '100%',
        height: '50%',
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        borderRadius: 1,
        borderColor: 'black',
        borderWidth: 2,
    },
    profilePicture: {
        width: 150,
        height: 150,
        borderRadius: 75,
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        borderColor: 'black',
        borderWidth: 2,
        position: 'absolute',
        top: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileInfo: {
        position: 'relative',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: 'orange',
        width: '40%',
        height: '20%',
        top: 225,
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    profilePost: {
        top: 240,
        fontFamily: 'Trebuchet MS',
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        borderRadius: 5,
        fontSize: 18,
        width: 50,
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 75
    },
    searchIcon: {
        left: '40%',
    },
    br: {
        width: '100%',
        height: '100%',
        position: 'relative',
        alignItems: 'center',
    },

    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginHorizontal: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        position: 'relative',
    },
    image: {
        flex: 1,
        height: 70,
        zIndex: -1,
    },
    destinationText: {
        position: 'absolute',
        top: 10,
        left: 0,
        right: 0,
        textAlign: 'center',
        color: '#fff',
        fontSize: 24,
    },
    btn: {
        position: 'absolute',
        alignSelf: 'center',
        zIndex: 1,
    },
    titleBar: {
        borderColor: 'black',
        borderRadius: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        width: '100%',
        alignItems: 'center',
        borderWidth: 1,
        bottom: -260
    }
});

export default ProfileScreen;
