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

        {/* <View> */}
        {/* <SafeAreaView > */}
        {/* <PrintLine /> */}
        <Text style={styles.title}>Anime Search</Text>
        <ScrollView style={styles.scrollView}>
          <ScrollView>
            <Text style={styles.labelAuthor}>Author: {this.state.data['Author']}</Text>
            <Text style={styles.labelAuthor}>Author: {this.state.data['Author']}</Text>
            <Text style={styles.labelAuthor}>Author: {this.state.data['Author']}</Text>
            <Text style={styles.labelAuthor}>Author: {this.state.data['Author']}</Text>
            <Text style={styles.labelAuthor}>Author: {this.state.data['Author']}</Text>
            <Text style={styles.labelAuthor}>Author: {this.state.data['Author']}</Text>
            <Text style={styles.labelAuthor}>Author: {this.state.data['Author']}</Text>
          </ScrollView>
        </ScrollView>
        {/* </SafeAreaView> */}
        {/* </View> */}

        <View>
          <SafeAreaView style={styles.containerTwo}>
            <View style={styles.separator}>
            </View>
            <Text style={styles.titleSubtitle}> Esperando nueva busqueda </Text>
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
    marginTop: -55,
    fontSize: 45,
    fontWeight: "bold",
  },
  titleSubtitle: {
    fontSize: 27,
    color: 'yellowgreen',
    textAlign: 'center',
  },
  labelAuthor: {
    marginTop: 10,
    color: 'white',
    fontSize: 25,
    marginLeft: 10,
    textAlign: 'center',
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
    width: 350,
    height: 350,
    marginTop: -10,
  },
  scrollView: {
    backgroundColor: 'black',
    marginHorizontal: 50,
    marginBottom: 20,
    marginTop: 10,
    width: 350,
  },

});
