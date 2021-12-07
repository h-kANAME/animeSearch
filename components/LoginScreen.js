import React from 'react'
import { Button } from 'react-native';
//import * as Google from 'expo-google-app-auth';
import * as Google from 'expo-auth-session/providers/google';
function LoginScreen({ navigation }) {

    const [request, response, promptAsync] = Google.useAuthRequest({
        expoClientId: '793559984832-8j3sa30s819dvleqt2dsu10065rj1mg6.apps.googleusercontent.com',
    });


    React.useEffect(() => {
        if (response?.type === 'success') {
            console.log(response);
            navigation.navigate("Home", { auth: response.authentication })
        }
    }, [response]);

    return (
        <Button
            disabled={!request}
            title="Login"
            onPress={() => { promptAsync(); }}
        />
    );
}

export default LoginScreen;