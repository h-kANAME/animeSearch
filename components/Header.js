import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Appbar } from 'react-native-paper';

const Header = () => {
    const LeftContent = props => <Avatar.Icon {...props} icon="assets/adaptative-icon.png" />
    const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical'; //Option header

    return (

        <View style={styles.container}>
            <StatusBar backgroundColor="gainsboro" />
            <Appbar.Header style={styles.item}>
                <Appbar.Content title="Anime Search" subtitle={'Created by KYZ'} subtitle={' by KYZ'} />
                <Appbar.Action icon={MORE_ICON} onPress={() => { }} />
            </Appbar.Header>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {

    },

});

export default Header;