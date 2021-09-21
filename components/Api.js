import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform, SafeAreaView, ScrollView, FlatList } from 'react-native';
export default class ApiStates extends React.Component {

  state = {
    data: ''
  }

  componentDidMount = () => {
    fetch('https://api.jikan.moe/v3/top/anime/1/bypopularity', {
      method: 'GET'
    })
      .then((response) => response.json())
      .then((responseJson) => {
       // console.log(responseJson.top);
        this.setState({
          //data = responseJson.top
        })
      })
      .catch((error) => {
        console.error(error);
      });
      
  }

  render() {

    return (

      <View style={styles.container}>
         {/* <SafeAreaView style={styles.container}>
          <FlatList

            data={data} keyExtractor={({ title }, index) => title}
            renderItem={({ item }) => {
              <Text>{item.title}, {item.rank}</Text>
            }} />
            
        </SafeAreaView> */}
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
  labelAuthor: {

  }

});
