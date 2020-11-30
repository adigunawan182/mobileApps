import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
 

 
const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={{borderBottomWidth: 1, borderTopWidth: 1 ,width: 300, height: 400}}>
        <Image style={styles.image} source={require('./1.jpeg')} />

        <Text style={styles.Label}>Username</Text>
        <Text style={styles.Field}>I Wayan adi gunawan</Text>
        <Text style={styles.Label}>Email</Text>
        <Text style={styles.Field}>yanadi27@gmail.com</Text>
        <Text style={styles.Label}>Phone Number</Text>
        <Text style={styles.Field}>+62 831 1178 9287</Text>
      </View>
    </View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: 80,
    marginVertical: 20,
    marginLeft: 100
  },

  Label: {
    fontSize: 30,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginLeft: 10,
    marginTop: 10
  },
  
  Field: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  }
});


export default Profile;