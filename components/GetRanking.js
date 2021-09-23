import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const GetRanking = () => {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const topUrl = "https://api.jikan.moe/v3/top/anime/1/bypopularity";

    useEffect(() => {
        fetch(topUrl)
            .then((response) => response.json())
            .then((json) => {
                setData(json.top); //Label to htl head
            })
            .catch((error) => alert(error))
            .finally(setLoading(false));
    }, []);
    // console.log(data);

    return (

        <View style={styles.container}>
            {isLoading ? (
                <ActivityIndicator />
            ) : (
                <Card style={styles.cardContainer}>
                    <FlatList
                        data={data}
                        keyExtractor={({ title }, index) => title}
                        renderItem={({ item }) => (

                            <TouchableOpacity>
                                <Card style={styles.item}>
                                    <Card>
                                        <Card.Content>
                                            <Title style={styles.titleAnime}>{item.title}</Title>
                                        </Card.Content>
                                        <Card.Cover style={styles.img} source={{ uri: item.image_url }} />
                                        <Card.Content>
                                            <Title style={styles.labelRanking}>Ranking N° {item.rank}</Title>
                                            <Paragraph style={styles.labelInfo}>Lanzmaiento: {item.start_date}</Paragraph>
                                            <Paragraph style={styles.labelInfo}>Episodios: {item.episodes}</Paragraph>
                                            <Paragraph style={styles.labelInfo}>Tipo: {item.type}</Paragraph>
                                        </Card.Content>
                                    </Card>
                                </Card>
                            </TouchableOpacity>
                        )}
                    />
                </Card>
            )}
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        borderWidth: 0,
        borderRadius: 2,
        borderColor: "#CCC",
        flexWrap: "nowrap",
        backgroundColor: "darkslateblue",
    },
    cardContainer: {
        // paddingTop: 5,
        // paddingLeft: 0,
        borderColor: "black",
        flexWrap: "nowrap",
        backgroundColor: "white",
    },
    item: {
        marginVertical: 4,
        marginHorizontal: 8,
    },
    img: {
        marginTop: 10,
        width: 395,
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
        //fontWeight: "bold",
    },
    labelRanking: {
        color: "black",
    },
});

export default GetRanking;