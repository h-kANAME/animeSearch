// import React from 'react';
// import { StyleSheet, View, Text } from 'react-native';
//https://www.youtube.com/watch?v=FSMrzYpBeDM&t=69s
// const LoginScreen = () => {

//     return (

//         <View style={styles.container}>
//             <Text>Login</Text>
//         </View>
//     );
// }
// const styles = StyleSheet.create({
//     container: {
//         width: '100%',
//         alignContent: 'center',
//         alignItems: 'center',
//         borderColor: "#CCC",
//         paddingTop: 7,
//         paddingBottom: 7,
//     },
// });

// export default LoginScreen;

// import * as React from 'react';
// import * Google from 'expo-google-app-auth';
// import * as WebBrowser from 'expo-web-browser';
// import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
// import { Button } from 'react-native';

// WebBrowser.maybeCompleteAuthSession();

// // Endpoint
// const discovery = {
//   authorizationEndpoint: 'https://github.com/login/oauth/authorize',
//   tokenEndpoint: 'https://github.com/login/oauth/access_token',
//   revocationEndpoint: 'https://github.com/settings/connections/applications/<CLIENT_ID>',
// };

// export default function LoginScreen() {
//   const [request, response, promptAsync] = useAuthRequest(
//     {
//       clientId: '793559984832-2juo6lesst3rjpp7k5a6plv95jkiavga.apps.googleusercontent.com',
//       scopes: ['profile', 'email'],
//       redirectUri: makeRedirectUri({
//         //scheme: 'your.app'
//         }),
//     },
//     discovery
//   );

//   React.useEffect(() => {
//     if (response?.type === 'success') {
//       const { code } = response.params;
//       }
//   }, [response]);

//   return (
//     <Button
//       disabled={!request}
//       title="Login"
//       onPress={() => {
//         promptAsync();
//         }}
//     />
//   );
// }

import React from 'react'
import { Button } from 'react-native';
import * as Google from 'expo-google-app-auth';

 const LoginScreen = () => {

    async function signInWithGoogleAsync() {
        try {
            const result = await Google.logInAsync({
                androidClientId: '793559984832-2juo6lesst3rjpp7k5a6plv95jkiavga.apps.googleusercontent.com',
                scopes: ['profile', 'email'],
            });

            if (result.type === 'success') {
                return result.accessToken;
            } else {
                return { cancelled: true };
            }
        } catch (e) {
            return { error: true };
        }
    }


    return (
        <Button
            title="Login"
            onPress={() => {
                signInWithGoogleAsync();
            }}
        />
    );
}

export default LoginScreen;