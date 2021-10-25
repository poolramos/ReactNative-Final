import React from 'react'
import {View,StyleSheet,Text,FlatList} from 'react-native'
import {Header,Button,Image} from 'react-native-elements'
import { useSelector, useDispatch } from 'react-redux'
import { deleteFavItem } from '../store/actions/fav.action'
import Color from '../constant/Color'
import NoItem from '../components/NoItem'
import Favorito from '../assets/images/heart.png'

const Favourite = () =>{

    const data = useSelector(state => state.favlist.favlist)
    const dispatch = useDispatch()
    /* console.log(data) */

    const dltItem = (itemId) =>{
        console.log(itemId)
        dispatch(deleteFavItem(itemId))
    }

    if(data.length == 0) return <NoItem title="Aun no tienes favoritos" image={Favorito}/>

    return(
        <View style={estilos.contenedorPrincipal}>
            <FlatList 
                data={data}
                renderItem={(data)=>
                    <View style={estilos.contenedorItemFav}>
                        <View style={estilos.contenedorItem}>
                            <View>
                                <Image 
                                    source={{uri:data.item.image}}
                                    containerStyle={estilos.imagen}
                            />
                            </View>
                            <View style={estilos.contenedorDesc}>
                                <Text style={estilos.fontName}>{data.item.item.productName}</Text>
                                <Text style={{color:'green'}}>Envio Gratis</Text>
                                <Text style={estilos.price}>{data.item.item.productPrice}</Text>
                            </View>
                        </View>
                        <View style={estilos.contenedorBoton}>
                            <Button 
                                type="outline"
                                title=" Eliminar de Favoritos"
                                /* icon={<Icon name="trash" size={15} color={Color.primario} />} */
                                containerStyle={estilos.botonDlt}
                                 onPress={()=>dltItem(data.item.item.productId)} 
                            />
                        </View>
                    </View>
                }
                keyExtractor={item => item.item.productId}
            />
        </View>
    )
}

const estilos = StyleSheet.create({
    contenedorPrincipal:{
        padding:10,
        backgroundColor:'#F5F5F5'
    },
    contenedorItemFav:{
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

export default Favourite;