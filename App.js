import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, Platform, SafeAreaView, ScrollView, Alert } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph, Appbar, TextInput, Divider, TouchableOpacity } from 'react-native-paper';
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Api from './components/Api';

export default function App() {
  const LeftContent = props => <Avatar.Icon {...props} icon="assets/adaptative-icon.png" />
  const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical'; //Option header
  //const [text, setText] = React.useState(''); //Input
  const [ButtonSearch, setButtonSearch] = useState('');


  var request = new XMLHttpRequest();

  request.open('OBTENER', 'https://api.jikan.moe/v3/club/1/members');

  request.onreadystatechange = function () {
    if (this.readyState === 4) {
      consola.log('Estado:', este.estado);
      consola.log('Encabezados:', esto.getAllResponseHeaders());
      consola.log('Body:', this.responseText);
    }
  };


  return (

    <View style={styles.container}>
      {/* <StatusBar style="auto" /> */}
      <StatusBar backgroundColor="white" />
      <View style={styles.containerInfo}>
        <Appbar.Header>
          <Appbar.Content title="Anime Search" subtitle={'Created by KYZ'} />
          {/* <Appbar.Action icon="magnify" onPress={() => { }} /> */}
          <Appbar.Action icon={MORE_ICON} onPress={() => { }} />
        </Appbar.Header>

        <Card style={styles.cardContainer}>
          <Card.Title title="Valoracion" subtitle="★★★★★" />
          <Card.Content>
            {/* <Paragraph>Fairy Tail</Paragraph> */}
          </Card.Content>
          <Card.Cover source={{ uri: 'https://www.teahub.io/photos/full/11-111593_anime-fairy-tail-wallpapers-fairy-tail.png' }} />
        </Card>
      </View>

      <View>
        <SafeAreaView style={styles.containerArea}>
          <ScrollView style={styles.scrollView}>
            <Card>
              <Card.Content>
                <Title>Fairy Tail</Title>
                <Paragraph>En emision</Paragraph>
                <Title>Temporadas</Title>
                <Paragraph>3</Paragraph>
                <Title>Sinapsis</Title>
                <Paragraph>Fairy Tail cuenta la historia de un joven mago llamado Natsu
                  en la búsqueda de su maestro y padre adoptivo Igneel, un dragón. ...
                  El mundo de Fairy Tail gira alrededor de los magos: personas que utilizan
                  distintos tipos de magia y que, además, realizan encargos a cambio de dinero,
                  similar a un caza recompensas.</Paragraph>
              </Card.Content>
            </Card>
          </ScrollView>
        </SafeAreaView>
      </View>

      <View>
        <Text> <Api /> </Text>
      </View>

      <View>
        <TextInput style={styles.inputSearch}
          mode="outlined"
          label="Ingrese la serie que desea buscar"
          placeholder=""
          //value="ButtonSearch"
          right={<TextInput.Affix text="/100" />}
          onChangeText={val => setButtonSearch(val)}
        />
        <Button style={styles.btnSearch}
          icon=""
          mode="contained"
          onPress={() => { Alert.alert('Buscando ... Serie ' + ButtonSearch) }} >
          Buscar
        </Button>
      </View>


    </View>

  );
}
const styles = StyleSheet.create({
  container: {
    borderWidth: 0,
    borderRadius: 2,
    borderColor: "#CCC",
    flexWrap: "nowrap",
    backgroundColor: "white",
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  cardContainer: {
    borderWidth: 2,
    borderRadius: 2,
    borderColor: "#CCC",
    flexWrap: "nowrap",
    backgroundColor: "white",
  },
  btnSearch: {

  },
  inputSearch: {

  },

  scrollView: {
    marginHorizontal: 5,
    backgroundColor: 'red', // No impacta?
  },
  text: {
    fontSize: 42,
  },

});
