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
 

const SignInScreen = ({onSignIn, navigation}) => {
  return (
    <View style={styles.container}>
        <Text style={{fontWeight: "bold", fontSize: 30, paddingBottom: 20, textTransform: 'uppercase'}}>Wellcome !</Text>

        <TextInput style={styles.boxInput} placeholder="Email" keyboardType='email-address' />
        <TextInput style={styles.boxInput} placeholder="Password"  secureTextEntry={true}/>

        <View>
          <TouchableOpacity style={styles.Btn} onPress={onSignIn}>
            <Text style={styles.txtBtn}>Sign in</Text>
          </TouchableOpacity>
        </View>

        <View>
            <TouchableOpacity style={styles.Btn} onPress={() => navigation.navigate('Sign Up')}>
              <Text style={styles.txtBtn}>Sign Up</Text>
            </TouchableOpacity>
        </View>

        <View style={{flexDirection:'row'}}>
         <Text style={{paddingTop: 10}}>Forgot your password?</Text>
         <Text style={{paddingTop: 10, color: 'blue', textDecorationLine: 'underline'}} onPress={() => navigation.navigate('Password Forget')}> Click here</Text> 
        </View>

      
    </View>


  );
};
 
export default SignInScreen