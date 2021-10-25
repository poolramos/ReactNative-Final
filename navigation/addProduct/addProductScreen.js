import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import addProduct from '../../screens/addProduct'
import Color from '../../constant/Color'


const Stack = createStackNavigator()
const addProductScreen = () =>{
    return(
        <Stack.Navigator
            initialRouteName="addProduct"
            screenOptions={{
                headerStyle:{
                    backgroundColor:Color.primario,
                },
                headerTintColor:'white'
            }}
        >
            <Stack.Screen 
                name="Agregar"
                component={addProduct}
            />

        </Stack.Navigator>
    )
}

export default addProductScreen;