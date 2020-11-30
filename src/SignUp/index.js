import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  Btn: {
    width: 250,
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 10,
    marginBottom: 5,
    backgroundColor: 'lightgrey' 
  },

  boxInput: {
    width: 250,
    textAlign: 'center',
    paddingVertical: 10,
    marginVertical: 10,
    borderBottomWidth: 1
  },

  txtBtn: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform: 'uppercase'
  }
});
 

const SignUpScreen = ({onSignUp}) => {
  return (
    <View style={styles.container}>
      <Text style={{fontWeight: "bold", fontSize: 30, paddingBottom: 20}}>Sign Up</Text>

      <View>
        
        <TextInput style={styles.boxInput} placeholder='Email' keyboardType='email-address'  />   
        <TextInput style={styles.boxInput} placeholder='Phone Number' keyboardType='number-pad'  />
        <TextInput style={styles.boxInput} secureTextEntry={true} placeholder='Password'/>     
        <TextInput style={styles.boxInput} secureTextEntry={true} placeholder='Confirm Password'/>

        <TouchableOpacity style={styles.Btn} onPress={onSignUp}>
          <Text style={styles.txtBtn}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
 
export default SignUpScreen