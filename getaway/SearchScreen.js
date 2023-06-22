import React, { useState } from 'react';
import { Text, View, ImageBackground, StatusBar, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SearchScreen = () => {
    const [searchText, setSearch] = useState('Search Trips');

    const changeText = () => {
        setSearch('');
    };
    return (
    <View style={styles.container}>
        <View style={styles.search}>
            <View style={styles.wrap}>
                <TextInput
                    style={styles.input}
                    value={searchText}
                    onChangeText={setSearch}
                    onFocus={changeText}
                    selectionColor="#FD9528"
                
                />
                <View style={styles.searchContainer}>
                    <Icon style={styles.searchIcon} name="search" size={20} color="orange"/>
                </View>
            </View>
        </View>
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    search: {
        position: 'absolute',
        top: 50,
        width: '85%',
        padding: 10,
    },
    input: {
        flex: 1,
        height: 50,
        paddingHorizontal: 10,
        fontSize: 16,
        color: '#FD9528',
    },
    wrap: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#FD9528',
        borderWidth: 1,
        borderRadius: 10, 

    },
    searchContainer: {
        paddingHorizontal: 10,
    },
});

export default SearchScreen;