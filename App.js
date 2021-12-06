import * as React from 'react';
import { StyleSheet, View, Text, Button, FlatList } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Card, Title, Paragraph } from 'react-native-paper';

import { Ionicons } from '@expo/vector-icons';
import GetRanking from './components/GetRanking';
import AnimeSearch from './components/AnimeSearch';
import LoginScreen from './components/LoginScreen';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <GetRanking
        navigation={navigation}
      />
    </View>
  );
}

function DetailsScreen({ route, navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <AnimeSearch />
      {/* <Button title="Volver" onPress={() => navigation.navigate('Home')} /> */}
    </View>
  );
}

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer
      style={styles.container}
    >
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ size, color }) => {
            switch (route.name) {
              case 'Login': return <Ionicons name="user" size={size} color={color} />
              case 'Ranking': return <Ionicons name="star" size={size} color={color} />
              case 'Buscar': return <Ionicons name="search" size={size} color={color} />
            }
          }
        })}
        tabBarOptions={{
          inactiveTintColor: 'lightgray',
          activeTintColor: 'purple'
        }}>
        <Tab.Screen name="Login" component={LoginScreen} />
        <Tab.Screen name="Ranking" component={HomeScreen} />
        <Tab.Screen name="Buscar" component={DetailsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    // borderWidth: 0,
    // borderRadius: 1,
    //  borderColor: "#CCC",
    // flexWrap: "nowrap",
    // backgroundColor: "darkslateblue",
    //flex: 1,
  },
});

export default App;