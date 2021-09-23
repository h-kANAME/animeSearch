import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Platform, SafeAreaView, ScrollView, Alert, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph, Appbar, TextInput, Divider } from 'react-native-paper';
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import GetRanking from './components/GetRanking';
import Footer from './components/GetRanking';
import Header from './components/Header';
// import {createStackNavigator} from './stack-navigator';
//React Navigation

// const RootStack = createStackNavigator({
//     DetailsAnime: DetailsAnime,
// })

const App = () => {

  return (

    <View style={styles.container}>
      <StatusBar backgroundColor="gainsboro" />

      <Header />
      <GetRanking />
      <Footer />

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
  },
  item: {
    marginVertical: 4,
    marginHorizontal: 8,
  },

});

export default App;