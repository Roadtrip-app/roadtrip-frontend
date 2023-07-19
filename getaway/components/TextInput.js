import React, { useState } from 'react';
import { Text, View, ImageBackground, StatusBar, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const InputBox = ({
    defaultText = '',
    handleSubmit = () => {}
}) => {
    const [input, setInput] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <TextInput
                    style={styles.input}
                    value={input}
                    placeholder={defaultText}
                    onChange={(event) => {setInput(event.nativeEvent.text)}}
                    onSubmitEditing = {handleSubmit(input)}
                    selectionColor="#FD9528"
                />
            </View>
            <Text>{input}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    wrapper: {
        borderColor: '#FD9528',
        marginTop:10,
        borderWidth: 1,
        borderRadius: 10, 
        width: '85%',
        padding: 10,
    },
    input: {
        height: 40,
        paddingHorizontal: 10,
        fontSize: 16,
        color: '#FD9528',
    },

});

export default InputBox;