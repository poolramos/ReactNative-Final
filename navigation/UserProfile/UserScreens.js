import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import UserProfile from '../../screens/UserProfile'
import Color from '../../constant/Color'
import Logout from '../../components/Logout'

const Stack = createStackNavigator()
const UserScreens = () =>{
    return(
        <Stack.Navigator
            initialRouteName="User"
            screenOptions={{
                headerStyle:{
                    backgroundColor:Color.primario,
                },
                headerTintColor:'white'
            }}
        >
            <Stack.Screen 
                name="User"
                component={UserProfile}
                options={{
                    headerTitle:'Usuario',
                    headerTitleAlign:'center',
                     headerRight: () => <Logout /> 
                }} 
            />

        </Stack.Navigator>
    )
}


export default UserScreens;