import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Alert, Button, Image, SafeAreaView, TextInput, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';


const PrintLine = () => (
  <View style={styles.separator} />
); //Salto de linea

export default class ApiStates extends React.Component {

  state = {
    data: ''
  }


  componentDidMount = () => {
    fetch('https://api.jikan.moe/v3', {
      method: 'GET'
    })
      .then((response) => response.json())
      .then((responseJason) => {
        console.log(responseJason);
        this.setState({
          data: responseJason
        })
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {

    return (


      <View style={styles.container}>
        <StatusBar style="auto" />
        <Image
          style={styles.imageDinamic}
          source={{ uri: "https://static.wikia.nocookie.net/tensei-shitara-slime-datta-ken/images/3/34/Rimuru_Slime_Anime.png/revision/latest?cb=20180922214304" }}
        />

        <Text style={styles.labelAuthor}>Author: {this.state.data['Author']}</Text>
        <PrintLine />

        {/* <View> */}
        {/* <SafeAreaView > */}
        <ScrollView style={styles.scrollView}>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          </Text>
        </ScrollView>
        {/* </SafeAreaView> */}
        {/* </View> */}

        <View>
          <SafeAreaView style={styles.containerTwo}>
            <Text style={styles.title}>Anime Search</Text>
            <View style={styles.separator}>
            </View>
            <TextInput
              style={styles.inputSearch}
              placeholder="Ingrese el Anime que desea buscar"
            />

            <View style={styles.separator}>
            </View>

            <Button title="Buscar"
              color="dodgerblue"
              onPress={() => Alert.alert('El boton funciona')}
            />
          </SafeAreaView>
        </View>
      </View>


    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    opacity: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 0,
  },
  title: {
    textAlign: 'center',
    color: 'yellowgreen',
    marginVertical: 0,
    fontSize: 45,
    fontWeight: "bold",
  },
  labelAuthor: {
    marginTop: 0,
    color: 'black',
  },
  inputSearch: {
    // margin: 12,
    borderWidth: 4,
    borderColor: 'dodgerblue',
    padding: 35,
    backgroundColor: 'white',

    textAlign: 'center',
  },
  separator: {
    marginVertical: 5,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  imageDinamic: {

    width: 400,
    height: 400,
  },
  scrollView: {
    backgroundColor: 'white',
    marginHorizontal: 22,
    marginBottom: 20,
    marginTop: -100,
  },

});
