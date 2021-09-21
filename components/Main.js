import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default class MainState extends React.Component {

    render() {

        // var request = new XMLHttpRequest();
        // request.open('OBTENER', 'http://api.jikan.moe/v3/top/anime/1/bypopularity');

        const [topAnime, SetTopAnime] = useState([]);
        //type => anime
        //page => 1
        //subtype => bypopularity

        const GetTopAnime = () => {
            fetch('http://api.jikan.moe/v3/top/anime/1/bypopularity', {
                method: 'GET'
            })
                .then((response) => response.json())
                .then((responseJason) => {

                    console.log(responseJason);
                    this.setState({
                        data: responseJason
                    })
                    SetTopAnime(temp.top.slice(0, 5)); // top 0 to top 5
                })
                .catch((error) => {
                    console.error(error);
                });

        }

        useEffect(() => {
            GetTopAnime();
        }, [])

        console.log('Top:');
        console.log(topAnime);


        return (


            <View style={styles.container}>
                {/* <Text>
                    topAnime={topAnime}
                </Text> */}
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
