import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.staffView}>STAFF DIRECTORY</Text>
      <Text>John Smith</Text>
      <Text>Sue White</Text>
      <Text>Bob O' Bits</Text>
      <Text>Mary Blue</Text>
      <Text>Mick Green</Text>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  staffView: {
    fontFamily: 'Arial',
    fontSize: 26,
    fontWeight: 'bold',
    justifyContent: 'space-between',
  }
});
