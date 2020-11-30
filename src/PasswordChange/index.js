import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
 
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
 
const PasswordChangeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>

      <View>
        
        <TextInput style={styles.boxInput} secureTextEntry={true} placeholder='Input Your Old Password' />
        <TextInput style={styles.boxInput} secureTextEntry={true} placeholder='Input New Password' />
        <TextInput style={styles.boxInput}secureTextEntry={true} placeholder='Confirm New Password' />

        <TouchableOpacity style={styles.Btn} onPress={() => navigation.navigate('Home')}> 
          <Text style={styles.txtBtn}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
 
export default PasswordChangeScreen;