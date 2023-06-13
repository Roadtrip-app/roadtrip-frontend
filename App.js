import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function App() {
  return (
    <View style={styles.container}>
      <Text></Text>
      <StatusBar style="auto" />
      <View style={styles.line}/>
      <ButtonHub/>
    </View>
    
  );
}
// Button Hub
const ButtonHub = () => (
  <View style={styles.hub}>
    <View style={styles.button}>
    <Icon.Button 
      name="home"
      backgroundColor="#FFD460"
      onPress={() => console.log('Home Button Pressed')}/>
    </View>
    
    <View style={styles.button}>
    <Icon.Button
      name="search"
      backgroundColor="#F07B3F"
      onPress={() => console.log("Search Pressed")}/>
    </View>
    <View style={styles.button}>
    <Icon.Button
      name="heart"
      backgroundColor="#EA5455"
      onPress={() => console.log('Like button Pressed')}/>
    </View>
    <View style={styles.button}>
    <Icon.Button
      name="person-circle-outline"
      backgroundColor="#2D4059"
      onPress={() => console.log("Profile Button Pressed")}/>
    </View>
    
  </View>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hub: {
    flexDirection: 'row',
    bottom: 40,
    position: 'absolute',
    width: '100%'
  },
  button: {
    flex: 1,
    alignItems: 'center',
  },
  line: {
    position: 'absolute',
    bottom: 85,
    width: '100%',
    borderTopWidth: 1,
    borderColor: 'grey',
  },
});
