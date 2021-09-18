import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform, SafeAreaView, ScrollView } from 'react-native';
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
          <ScrollView style={styles.scrollView}>
            <ScrollView>
              <Text style={styles.labelAuthor}>Author: {this.state.data['Author']}</Text>
            </ScrollView>
          </ScrollView>
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
 
  });
  