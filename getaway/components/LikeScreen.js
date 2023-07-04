import React from 'react';
import {Flatlist, SectionList, SafeAreaView, Text, View, ImageBackground, StatusBar, StyleSheet, TouchableOpacity} from 'react-native';

const DATA = [
    {
        title: 'Like 1',
        data: ["Detail 1", "Detail 2", "Detail 3"]
    },

    {
        title: 'Like 2',
        data: ["Detail 1", "Detail 2", "Detail 3"]
    },

    {
        title: 'Like 3',
        data: ["Detail 1", "Detail 2", "Detail 3"]
    },

];

const Item = ({ title }) => (
    <View style={styles.itemContainer}>
        <Text style={styles.item}>{title}</Text>
    </View>
    
);

const LikeScreen = () => (
    <SafeAreaView style={styles.container}>
        <SectionList
            sections={DATA}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => <Item title={item} />}
            renderSectionHeader={({ section: { title } }) => (
                <View style={styles.headerContainer}>
                    <Text style={styles.header}>{title}</Text>
                </View>

            )}
        />
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
    },
    item: {
        fontSize: 24,
        color: '#333',
        padding: 10,
    },

});


export default LikeScreen;