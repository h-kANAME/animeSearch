import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {

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
        <Text>Open up App.js to start working on your</Text>
        <StatusBar style="auto" />
        <Text>{this.state.data['Author']}</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
