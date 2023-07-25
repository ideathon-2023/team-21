import { Text, View, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'

export default function App() {
  const [name,setName] = useState('Yashaswi');
  const [age,setAge] = useState('20');


    return (
      <View style={styles.container}>

        <TextInput style={styles.input}
        placeholder='Enter Name'
        onChangeText={(val)=>setName(val)}/>

        <TextInput style={styles.input}
        placeholder='Student id'
        onChangeText={(val)=>setName(val)}/>

        <TextInput style={styles.input}
        placeholder='Branch'
        onChangeText={(val)=>setName(val)}/>

        <TextInput style={styles.input}
        placeholder='Room number'
        onChangeText={(val)=>setName(val)}/>

        <TextInput style={styles.input}
        placeholder='Mobile number'
        onChangeText={(val)=>setName(val)}/>

        <TextInput style={styles.input}
        placeholder='Pec mail-id'
        onChangeText={(val)=>setName(val)}/>

        <TextInput style={styles.reason}
        placeholder='Reason'
        onChangeText={(val)=>setName(val)}/>

        <TextInput style={styles.input}
        placeholder='Address of visiting place'
        onChangeText={(val)=>setName(val)}/>

        <TextInput style={styles.input}
        placeholder='Parents Mobile number'
        onChangeText={(val)=>setName(val)}/>

        <TextInput style={styles.input}
        placeholder='Date'
        onChangeText={(val)=>setName(val)}/>

        <TextInput style={styles.input}
        placeholder='OTP'
        onChangeText={(val)=>setName(val)}/>

        {/* <Text>name:{name},age:{age}</Text> */}
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#F2EAD3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input : {
    borderWidth:1,
    borderColor:'#777',
    padding:8,
    margin:10,
    width:200,
    borderRadius:10,
  reason : {
    borderWidth:1,
    borderColor:'#777',
    padding:50,
    margin:10,
    width:200,
    borderRadius:10,
  }
  }
})