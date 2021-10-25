import React from 'react'
import {} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import Color from '../../constant/Color';
import Login from '../../screens/Login';
import Register from '../../screens/Register';

const Stack = createStackNavigator();
const AuthScreen = () =>{
    return (
        <Stack.Navigator
            initialRouteName="login"
        >
            <Stack.Screen 
                name="login"
                component={Login}
                options={{
                    headerShown:true,
                    headerStyle:{backgroundColor:Color.primario},
                    headerTitleAlign:'center',
                    headerTitle: 'E-Commerce',
                    headerTitleStyle:{
                        fontFamily:'open-sans',
                        fontWeight:'bold',
                        color:"white"
                    }
                }}
            />
            <Stack.Screen 
                name="register"
                component={Register}
                options={{
                    headerShown:true,
                    headerStyle:{backgroundColor:Color.primario},
                    headerTitleAlign:'center',
                    headerTitle: 'Registrarse',
                    headerTitleStyle:{
                        fontFamily:'open-sans',
                        fontWeight:'bold',
                        color:"white"
                    },
                }}
            />

        </Stack.Navigator>
    )
}


export default AuthScreen;