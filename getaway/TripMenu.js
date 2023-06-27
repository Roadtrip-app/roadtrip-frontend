import { Text, Button, View, StyleSheet} from 'react-native';
import TextInput from './components/TextInput'
const TripMenu = () => {
    return (
        <View style={styles.container}>
            <View>
                <TextInput defaultText="Starting point"></TextInput>
                <TextInput defaultText="Destination"></TextInput>
                <TextInput defaultText="Testing"></TextInput>
                <Button title="test"></Button>
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
}});
export default TripMenu