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
      <StatusBar backgroundColor="white" />

      <SafeAreaView>

        <View style={styles.containerInfo}>
          <Appbar.Header>
            <Appbar.Content title="Anime Search" subtitle={'Created by KYZ'} />
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
                <SafeAreaView>
                  <TouchableOpacity>
                    <Card style={styles.cardContainer}>
                      {/* <Card.Title title="Valoracion" subtitle="★★★★★" /> */}
                      <Card.Content>
                        <Paragraph style={styles.titleAnime}>{item.title}</Paragraph>
                      </Card.Content>
                      <Card.Cover source={{ uri: item.image_url }} />
                    </Card>

                    <View>
                      <Card>
                        <Card.Content>
                          <Title>{item.title}</Title>
                          <Title>Ranking N° {item.rank}</Title>
                          <Paragraph>3</Paragraph>
                          <Title>Sinapsis</Title>
                          <Paragraph>Fairy Tail cuenta la historia de un joven mago llamado Natsu
                            en la búsqueda de su maestro y padre adoptivo Igneel, un dragón. ...
                            El mundo de Fairy Tail gira alrededor de los magos: personas que utilizan
                            distintos tipos de magia y que, además, realizan encargos a cambio de dinero,
                            similar a un caza recompensas.</Paragraph>
                        </Card.Content>
                      </Card>
                    </View>
                  </TouchableOpacity>
                </SafeAreaView>

              )}
            />
          </Card>
        )}

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

      </SafeAreaView>
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
  titleAnime: {
    marginTop: 10,
    fontSize: 20,
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

export default App;