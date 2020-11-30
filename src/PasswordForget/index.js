import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -100,
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
 
const PasswordForgetScreen = ({onSignIn}) => {
  return (
    <View style={styles.container}>

      <View>
        <TextInput style={styles.boxInput} keyboardType='email-address' placeholder='Input Your Email' />
        <TextInput style={styles.boxInput} secureTextEntry={true} placeholder='New Password' />
        <TextInput style={styles.boxInput}secureTextEntry={true} placeholder='Confirm New Password'/>

        <TouchableOpacity style={styles.Btn} onPress={onSignIn} >
          <Text style={styles.txtBtn}>Confirm</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};
 
export default PasswordForgetScreen;