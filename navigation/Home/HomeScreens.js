import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import BtnHeader from '../../components/BtnHeader'
import CartProduct from '../../screens/CartProduct'
import Home from '../../screens/Home'
import ProductDesc from '../../components/lista/ProductDesc'
import Color from '../../constant/Color';
import Logout from '../../components/Logout'
import addProduct from '../../screens/addProduct'
import CategoryList from '../../screens/CategoryList'

const Stack = createStackNavigator();
const HomeScreens = () =>{
    return(
            <Stack.Navigator
                screenOptions={{
                    headerStyle:{
                        backgroundColor:Color.primario,
                    },
                    headerTintColor:'white',
                }}
            >
                <Stack.Screen 
                    name="Home" 
                    component={Home}
                      options={{
                        headerTitle:'E-Commerce',
                        headerTitleAlign:'center',
                        headerRight: () => <BtnHeader />,
                        headerLeft: () => <Logout />
                    }}  
                />

                <Stack.Screen 
                    name="Categoria" 
                    component={CategoryList}
                      options={{
                        /* headerTitle:'E-Commerce',
                        headerTitleAlign:'center',
                        headerRight: () => <BtnHeader />,
                        headerLeft: () => <Logout /> */
                    }}  
                />

                <Stack.Screen 
                    name="Product"
                    component={ProductDesc}
                    options={{
                        headerTitle:'',
                        headerShown:true
                    }}
                    /* options={({ route }) => ({ title: route.params.name })} */
                />
                <Stack.Screen 
                    name="Cart"
                    component={CartProduct}
                    options={{
                        headerTitle:'Carrito',
                        headerShown:true,
                    }}        
                />
                <Stack.Screen 
                    name="agregar Producto"
                    component={addProduct}
                    options={{
                        headerTitle:'Agregar Producto',
                        headerShown:true,
                    }}        
                />
            </Stack.Navigator>
    )
}

export default HomeScreens;