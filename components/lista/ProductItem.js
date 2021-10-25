import React from 'react'
import {View,StyleSheet,Text,TouchableOpacity} from 'react-native'
import {Image,Button,Divider} from 'react-native-elements'
import Color from '../../constant/Color'
import Icon from 'react-native-vector-icons/FontAwesome';


const ProductList = ({item,viewProd}) =>{


    let cadena = item.item.productDetail.substring(0,30)
    cadena += '...'

    return(
        <TouchableOpacity style={estilos.contenedorPrincipal} onPress={()=>{viewProd(item)}}>
            <View style={estilos.contenedorImagen}>
                <Image 
                    source={{uri:item.image}}
                    containerStyle={estilos.itemImage}
                /> 
            </View>
            <Divider />
            <View style={estilos.contenedorDescripcion}>
                <Text style={estilos.itemPrice}>${item.item.productPrice}</Text>
                <Text style={estilos.itemDetail}>{cadena}</Text>
                <Text style={{color:'green',marginTop:10}}>Envio gratis</Text>
            </View>
            
        </TouchableOpacity>
    )
}


const estilos = StyleSheet.create({
    contenedorPrincipal:{
        marginBottom:15, 
        backgroundColor:'white',
        borderRadius:1,
        width:180,
        height:'auto',
        marginRight:10,
        borderRadius:5,
      
    },
    contenedorImagen:{
        alignItems:'center',
        marginBottom:10,
    },
    contenedorDescripcion:{
        padding:10,
    },
    itemName:{
        fontFamily:'open-sans',
        textAlign:'left',
        marginBottom:10
    },
    itemImage:{
        width:160,
        height:100,
        marginTop:15,
    },
    itemPrice:{
        fontFamily:'open-sans',
        textAlign:'left',
        fontSize:25,
    },
    itemDetail:{

    },
})


export default ProductList;