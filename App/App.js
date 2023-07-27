
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.container}>
        <Text style={{fontSize:50,color:'#3F2305'}}>Dormsavior</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    // flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:650,
  },
});
