import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Platform, SafeAreaView, ScrollView, Alert, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph, Appbar, TextInput, Divider } from 'react-native-paper';
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
//import Api from './components/Api';
//React Navigation
const App = () => {
  const LeftContent = props => <Avatar.Icon {...props} icon="assets/adaptative-icon.png" />
  const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical'; //Option header
  //const [text, setText] = React.useState(''); //Input
  const [ButtonSearch, setButtonSearch] = useState('');

  //Api Start
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const topUrl = "https://api.jikan.moe/v3/top/anime/1/bypopularity";

  useEffect(() => {
    fetch(topUrl)
      .then((response) => response.json())
      .then((json) => {
        setData(json.top);

      }) //Label to htl head
      .catch((error) => alert(error))
      .finally(setLoading(false));
  }, []);
  // console.log(data);
  // //Api End

  return (
    <View style={styles.container}>
      {/* <StatusBar style="auto" /> */}
      <StatusBar backgroundColor="gainsboro" />

      <SafeAreaView>

        <View>
          <Appbar.Header style={styles.item}>
            <Appbar.Content title="Anime Search" subtitle={'Created by KYZ'} subtitle={' by KYZ'} />
            {/* <Appbar.Action icon="magnify" onPress={() => { }} /> */}
            <Appbar.Action icon={MORE_ICON} onPress={() => { }} />
          </Appbar.Header>
        </View>

        {isLoading ? (

          <ActivityIndicator />
        ) : (
          <Card style={styles.cardContainer}>
            <FlatList
              data={data}
              keyExtractor={({ title }, index) => title}
              renderItem={({ item }) => (
                <SafeAreaView style={styles.item}>
                  <TouchableOpacity>
                    <View>
                      <Card style={styles.cardContainer}>

                        <View>
                          <Card>
                            {/* <Card.Title title="Valoracion" subtitle="★★★★★" /> */}
                            {/* <Card.Content> */}
                            <Title style={styles.titleAnime}>{item.title}</Title>

                            {/* </Card.Content> */}
                            <Card.Cover style={styles.img} source={{ uri: item.image_url }} />
                          </Card>
                        </View>

                        <View>
                          <Card>
                            <Card.Content>
                              <Title style={styles.labelRanking}>Ranking N° {item.rank}</Title>
                              <Paragraph style={styles.labelInfo}>Lanzmaiento: {item.start_date}</Paragraph>
                              <Paragraph style={styles.labelInfo}>Episodios: {item.episodes}</Paragraph>
                              <Paragraph style={styles.labelInfo}>Tipo: {item.type}</Paragraph>
                              {/* <Title>Sinapsis</Title> */}
                              {/* <Paragraph>Fairy Tail cuenta la historia de un joven mago llamado Natsu
                            en la búsqueda de su maestro y padre adoptivo Igneel, un dragón. ...
                            El mundo de Fairy Tail gira alrededor de los magos: personas que utilizan
                            distintos tipos de magia y que, además, realizan encargos a cambio de dinero,
                            similar a un caza recompensas.</Paragraph> */}
                            </Card.Content>
                          </Card>
                        </View>

                      </Card>
                    </View>

                  </TouchableOpacity>
                </SafeAreaView>

              )}
            />
          </Card>
        )}

        <View style={styles.container}>
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

      </SafeAreaView>
    </View>

  );
}
const styles = StyleSheet.create({
  container: {
    borderWidth: 0,
    borderRadius: 1,
    borderColor: "#CCC",
    flexWrap: "nowrap",
    backgroundColor: "darkslateblue",
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  containerInfo: {
    // padding: 10,
    // backgroundColor: "darkslateblue",
    // borderWidth: 10,
    // borderColor: "darkslateblue",
  },
  cardContainer: {
    borderWidth: 1,
    paddingTop: 5,
    paddingLeft: 1,
    borderColor: "black",
    flexWrap: "nowrap",
    backgroundColor: "white",
  },
  cardContainerInfo: {
    borderColor: "black",
    borderWidth: 1,
  },
  item: {
    marginVertical: 4,
    marginHorizontal: 8,
  },

  titleAnime: {
    marginTop: 10,
    margin: 2,
    fontSize: 20,
    color: "black",
  },
  inputSearch: {

  },
  labelInfo: {
    fontSize: 17,
    color: "black",
    //fontWeight: "bold",
  },
  labelRanking: {
    color: "black",
  },

  scrollView: {
    marginHorizontal: 5,
    backgroundColor: 'red', // No impacta?
  },
  text: {
    fontSize: 42,
  },
  img: {
    marginTop: 10,
    width: 389,
    height: 400,
  },

});

export default App;