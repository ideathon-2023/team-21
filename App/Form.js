import { Text, View, StyleSheet, TextInput,ScrollView, SafeAreaView,StatusBar,Button,Alert, } from 'react-native'
import React, { useState } from 'react'

export default function App() {
  const [name,setName] = useState('Yashaswi');
  const [sid,setsid] = useState('22106023');
  const [branch,setbranch] = useState('Data-Science');
  const [room_number,setrn] = useState('21');
  const [mobile_number,setmn] = useState('7719417331');
  const [Pec_mail_id,setpmi] = useState('yashaswikhurana.bt22cseds@pec.edu.in');
  const [Reason,setreason] = useState('Going home');
  const [AVP,setavp] = useState('AVP');
  const [PMN,setpmn] = useState('9815494849');
  const [Date,setdate] = useState('dd/mm/yyyy');


    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.ScrollView}>
        <TextInput style={styles.input}
        placeholder='Enter Name'
        onChangeText={(val)=>setName(val)}/>

        <TextInput style={styles.sid}
        keyboardType='numeric'
        placeholder='Student id'
        onChangeText={(val2)=>setsid(val2)}/>

        <TextInput style={styles.input}
        placeholder='Branch'
        onChangeText={(val3)=>setbranch(val3)}/>

        <TextInput style={styles.input}
        placeholder='Room number'
        onChangeText={(val4)=>setrn(val4)}/>

        <TextInput style={styles.input}
        placeholder='Mobile number'
        keyboardType='numeric'
        onChangeText={(val5)=>setmn(val5)}/>

        <TextInput style={styles.input}
        placeholder='Pec mail-id'
        onChangeText={(val6)=>setpmi(val6)}/>

        <TextInput style={styles.reason}
        placeholder='Reason'
        onChangeText={(val7)=>setreason(val7)}/>

        <TextInput style={styles.input}
        placeholder='Address of visiting place'
        onChangeText={(val8)=>setavp(val8)}/>

        <TextInput style={styles.input}
        placeholder='Parents Mobile number'
        keyboardType='numeric'
        onChangeText={(val9)=>setpmn(val9)}/>

        <TextInput style={styles.input}
        placeholder='Date'
        onChangeText={(val10)=>setdate(val10)}/>

        <TextInput style={styles.input}
        placeholder='OTP'
        onChangeText={(val)=>setName(val)}/>
        <View style={styles.fixToText}>
          <Button
          title="Submit"
          onPress={() => Alert.alert('Your form has been submitted and is under process')}
        /></View>
        
        </ScrollView>
      </SafeAreaView>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#F2EAD3',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight,

    // marginTop: 20,
  },
  input : {
    borderWidth:1,
    borderColor:'#777',
    padding:8,
    margin:10,
    width:300,
    borderRadius:10,},
  reason : {
    borderWidth:1,
    borderColor:'#777',
    padding:8,
    margin:10,
    width:300,
    borderRadius:10,
  },
    sid : {
    borderWidth:1,
    borderColor:'#777',
    padding:8,
    margin:10,
    width:300,
    borderRadius:10,
    
  },
  fixToText:{
    width: 90,
    justifyContent:'center',
    alignItems:'center',
    marginLeft: 110,
  }
  },
)