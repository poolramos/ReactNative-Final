import React,{useState} from 'react'
import {View,FlatList,StyleSheet,RefreshControl,SafeAreaView} from 'react-native'
import {} from 'react-native-elements'
import Color from '../../constant/Color'
//Componentes
import ProductItem from './ProductItem'


const ProductList = ({productList,viewProd}) =>{

    return(
        <View style={estilos.contenedorPrincipal}>

                <FlatList 
                    data={productList} 
                    renderItem={(data)=>
                        <ProductItem
                            item={data.item}
                            viewProd={viewProd}
                        />
                    }
                    keyExtractor={item=>item.item.productId}
                    numColumns={2}
                />
         
            
        </View>
    )
}

const estilos = StyleSheet.create({
    contenedorPrincipal:{
        
    },
})

export default ProductList;