import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

const Footer = () => {
    
    //const [text, setText] = React.useState(''); //Input
    const [ButtonSearch, setButtonSearch] = useState('');

    return (

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
    );
}
const styles = StyleSheet.create({
    container: {
        borderWidth: 0,
        borderRadius: 2,
        borderColor: "#CCC",
        flexWrap: "nowrap",
        flex: 1,
    },
    inputSearch: {

    },
});

export default Footer;