import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Favourite from '../../screens/Favourite'
import Color from '../../constant/Color'


const Stack = createStackNavigator()
const FavScreens = () =>{
    return(
        <Stack.Navigator
            initialRouteName="Favourite"
            screenOptions={{
                headerStyle:{
                    backgroundColor:Color.primario,
                },
                headerTintColor:'white'
            }}
        >
            <Stack.Screen 
                name="Favourite"
                component={Favourite}
                options={{
                    headerTitle:'Favoritos',
                    headerTitleAlign:'center',
                  /*    headerRight: () => <Logout />  */
                }} 
            />

        </Stack.Navigator>
    )
}


export default FavScreens;