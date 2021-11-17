import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, View, FlatList, ActivityIndicator, TextInput, Text, Button, TouchableOpacity } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const AnimeSearch = () => {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [search, setSearch] = useState(''); //Search
    let topUrl = `https://api.jikan.moe/v3/search/anime?q=${search}&page=1`;

    let updateSearch = () => {
        //console.log('url: ' + topUrl)
        //alert(topUrl);
        fetch(topUrl)
            .then((response) => response.json())
            .then((json) => {
                setData(json.results);
            })
            .catch((error) => {
                alert(error)
            })
            .finally(setLoading(false));
    }

    return (

        <View style={styles.container}>

            <TextInput style={styles.input}
                placeholder="Serie buscar"
                textAlign="center"
                onChangeText={text => setSearch(text)}
            />

            <TouchableOpacity

                //  this.updateSearch()
                //  console.log('Buscador: ' + search) }
                onPress={updateSearch}
                //   onClick={() => stAnime}

                style={{ backgroundColor: '#543358' }}>

                <Text style={{ fontSize: 20, color: 'white', textAlign: 'center', fontWeight: "bold", }}>Buscar</Text>
            </TouchableOpacity>

            {isLoading ? (
                <ActivityIndicator />
            ) : (
                <FlatList
                    data={data}
                    keyExtractor={({ title }, index) => title}
                    renderItem={({ item }) => (
                        <Card style={styles.item}>
                            <Card style={styles.cardContainer}>
                                <Card.Content>
                                    <Title style={styles.titleAnime}>{item.title}</Title>
                                </Card.Content>
                                <Card.Cover style={styles.img} source={{ uri: item.image_url }} />
                                <Card.Content>
                                    <Title style={styles.labelRanking}>Valoracion {item.score}</Title>
                                    <Paragraph style={styles.labelInfo}>Episodios: {item.episodes}</Paragraph>
                                    <Paragraph style={styles.labelInfo}>Tipo: {item.type}</Paragraph>
                                </Card.Content>
                            </Card>
                        </Card>
                    )}
                />
            )}
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderColor: "#CCC",
        paddingTop: 7,
        paddingBottom: 7,
    },
    cardContainer: {
        backgroundColor: "white",
        borderRadius: 15,
    },
    item: {
        marginVertical: 4,
        marginHorizontal: 8,
    },
    img: {
        borderRadius: 1,
        marginTop: 10,
        width: 344,
        height: 460,
    },
    titleAnime: {
        marginTop: 10,
        margin: 2,
        fontSize: 20,
        color: "black",
    },
    labelInfo: {
        fontSize: 17,
        color: "black",
    },
    labelRanking: {
        fontSize: 17,
        color: "black",
    },
    input: {
        backgroundColor: "white",
        marginBottom: 1,
        marginTop: 70,
        marginBottom: 10,
        alignItems: "center",
        alignContent: "center",
        borderWidth: 1,
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
    },
    header: {
        margin: 12,
        margin: 10,
        marginTop: 20,
    },
});

export default AnimeSearch;