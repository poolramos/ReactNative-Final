import React from 'react'
import {View,StyleSheet,Text} from 'react-native'
import {Image,Button} from 'react-native-elements'
import Color from '../constant/Color'


const CartItem = ({item,dltItem}) =>{

    /* console.log(item.item.productId) */

    return(
        <View style={estilos.contenedorPrincipal}>
            <View style={estilos.contenedorItem}>
                <View>
                    <Image 
                        source={{uri:item.image}}
                        containerStyle={estilos.imagen}
                 />
                </View>
                <View style={estilos.contenedorDesc}>
                    <Text style={estilos.fontName}>{item.item.productName}</Text>
                    <Text style={{color:'green'}}>Envio Gratis</Text>
                    <Text style={estilos.price}>{item.item.productPrice}</Text>
                    <Text style={estilos.cantidad}>Cantidad: {item.contador}</Text>
                 </View>
            </View>
            <View style={estilos.contenedorBoton}>
                <Button 
                    type="outline"
                    title=" Eliminar del Carrito"
                    /* icon={<Icon name="trash" size={15} color={Color.primario} />} */
                    containerStyle={estilos.botonDlt}
                    onPress={()=>dltItem(item.item.productId)}
                />
            </View>
        </View>
    )
}

const estilos = StyleSheet.create({
    contenedorPrincipal:{
        marginTop:10,
        padding:5,
        borderBottomWidth:1,
        borderBottomColor:'#E5E5E5',
        backgroundColor:'white',
        borderRadius:15,
        marginLeft:5,
        marginRight:5,
    },
    contenedorItem:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'flex-start',
        padding:5,
    },
    imagen:{
        width:100,
        height:100,
        marginLeft: 10,
    },
    contenedorDesc:{
        marginLeft:10,
    },
    contenedorBoton:{
        marginBottom:10
    },
    botonDlt:{
       padding:10
    },
    fontName:{
        fontFamily:'open-sans',
        fontSize: 15,
    },
    price:{
        color:'black',
        textAlign:'left',
        fontFamily:'open-sans',
        marginTop:10,
        fontSize:20
    },
    cantidad:{
        marginTop:10,
        color:'black',
        fontFamily:'open-sans'
    },
})

export default CartItem;