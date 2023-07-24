import { Text, View, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'

export default function App() {
  const [name,setName] = useState('Yashaswi');
  const [age,setAge] = useState('20');


    return (
      <View style={StyleSheet.container}>
        <Text>name:{name},age:{age}</Text>
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})