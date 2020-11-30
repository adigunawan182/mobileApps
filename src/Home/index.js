import React, {useState} from 'react';
import {View,StyleSheet ,Text, Image, TouchableHighlight, ScrollView, Modal, TouchableOpacity} from 'react-native';


const styles = StyleSheet.create({
   container: {
     flex: 1,
     marginLeft: 80
   },

   Card: {
     borderWidth: 1,
     width: 302,
     marginVertical: 15,
     borderRadius: 5
   },

   Title: {
     textAlign: 'center',
     fontWeight: 'bold',
     fontSize: 30
   },

   Isi: {
     marginVertical: 20,
     textAlign: 'center',
     fontSize: 20,
     fontWeight: 'bold'
   },

   Pesan: {
     borderWidth: 1,
     width: 150,
     marginLeft: 75,
     backgroundColor: 'yellow',
     borderColor: 'yellow',
     borderRadius: 8,
     marginBottom: 50,
     paddingVertical: 20
   },

   textStyle: {
     textAlign: 'center',
     paddingVertical: 10,
     textTransform: 'uppercase',
     fontWeight: 'bold'
   },

   modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    paddingVertical: 10,
    elevation: 2,
    width: 150
  },
  textStyle: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
    textTransform: 'uppercase'
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }

  });

  const showAlertHandler3 = () => {
    Alert.alert(
      'Pesan',
      'Berhasil Booking Lapangan C !', 
      [
        { text: 'Done' },
      ],
      { cancelable: true }
    );
  };
  
   
  const HomeScreen = () => {
    const [modalVisible1, setModalVisible1] = useState(false);
    return (
      <ScrollView style={styles.container}>
        <View style={styles.Card}>
          <Image style={{width: 300, height: 150, borderRadius: 5}} source={require('./1.jpg')} />
          <Text style={styles.Title}>Ayam Geprek Sedap</Text>
          <Text style={styles.Isi}>Rp 12.000</Text>
          <TouchableHighlight
              style={styles.Pesan}
              onPress={() => {
              setModalVisible1(true);
            }}
           >
            <Text style={styles.textStyle}>Detail</Text>
            </TouchableHighlight>

            <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible1}
          >
          <View style={styles.modalView}>

            <Text style={{fontSize: 30, fontWeight: 'bold', color: 'lightgrey', borderBottomWidth: 1, width: 300, textAlign: 'center', marginBottom: 10}}>Detail</Text>
            
            <Image style={{width: 300, height: 150, borderRadius: 5}} source={require('./1.jpg')} />  
            <Text style={styles.Title}>Ayam Geprek Sedap</Text>

            <Text style={{borderBottomWidth: 1, width: 350, marginLeft: 25, marginBottom: 10}}></Text>

            <Text style={{fontSize: 16, textAlign: 'justify', marginVertical: 10}}>
               Paket ayam murah meriah gratis es teh. Rasa terjamin habis makan langsung bolak balik kamar mandi.
            </Text>

          
              <Text style={styles.Isi}>Rp 12.000 </Text>

          
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={{...styles.openButton, backgroundColor: '#1af20f', marginVertical: 5 }} onPress={showAlertHandler3}>
                <Text style={styles.textStyle}>Booking Sekarang</Text>
              </TouchableOpacity>
              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#2196F3", marginLeft: 5, height: 35, marginTop: 5 }}
                onPress={() => {
                  setModalVisible1(!modalVisible1);
                }}
              >
                <Text style={styles.textStyle}>Close</Text>
            </TouchableHighlight>
            </View>
            
          </View>
          </Modal>
        </View>

        <View style={styles.Card}>
          <Image style={{width: 300, height: 150, borderRadius: 5}} source={require('./1.jpg')} />
          <Text style={styles.Title}>Ayam Geprek Sedap</Text>
          <Text style={styles.Isi}>Rp 12.000</Text>
          <TouchableHighlight
              style={styles.Pesan}
              onPress={() => {
              setModalVisible1(true);
            }}
           >
            <Text style={styles.textStyle}>Detail</Text>
            </TouchableHighlight>
        </View>

        <View style={styles.Card}>
          <Image style={{width: 300, height: 150, borderRadius: 5}} source={require('./1.jpg')} />
          <Text style={styles.Title}>Ayam Geprek Sedap</Text>
          <Text style={styles.Isi}>Rp 12.000</Text>
          <TouchableHighlight
              style={styles.Pesan}
              onPress={() => {
              setModalVisible1(true);
            }}
           >
            <Text style={styles.textStyle}>Detail</Text>
            </TouchableHighlight>
        </View>
      </ScrollView>
    );
  };
   
  export default HomeScreen;