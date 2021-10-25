import React,{useState,useEffect} from 'react'
import {View,StyleSheet,Text,ScrollView} from 'react-native'
import {Image,Button,Divider } from 'react-native-elements'
import { Snackbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import { addFavItem , deleteFavItem} from '../../store/actions/fav.action';
import {addItemCart} from '../../store/actions/cartList.action'

const ProductDesc = ({route,navigation}) =>{

    const [fav,setFav] = useState(false);
    const dispatch = useDispatch();
    const additem = (item)=>{
        const itemNew = {
            ...item,
            contador,
        }
        dispatch(addItemCart(itemNew))
        navigation.push('Cart')
    }


    const [contador,setContador] = useState(0)

    const contadorCantidad = (tipo) =>{
        if(tipo=='suma')
            setContador(contador+1)
        else{
            if(contador<=0){

            }else
                setContador(contador-1)
        }
    }

    const DltfavProduct = (itemId) =>{
        console.log(itemId)
        dispatch(deleteFavItem(itemId))
        setFav(false)
    }

    const favProduct = (item) =>{

        dispatch(addFavItem(item))
        setFav(true)
    }

    const data = useSelector(state => state.favlist.favlist)
    const checkFavProduct = () =>{
        /* console.log(data) */
        data.forEach(element =>{
            if(element.item.productId == route.params.item.item.productId)
                setFav(true)
        })
    } 

    useEffect(()=>{
        checkFavProduct()
    },[])


    return(
        <ScrollView>
             <View style={estilos.contenedorPrincipal}>
                    <View style={estilos.contenedorDetalle}>
                        
                        <View style={estilos.contenedorTitle}>
                            <Text style={estilos.itemTitle}>{route.params.item.item.productName}</Text>
                            <Icon name="truck" color="green" size={35}></Icon>
                        </View>

                        <View style={estilos.contenedorImagen}>
                                <Image 
                                    source={{uri:route.params.item.image}}
                                    containerStyle={estilos.prdImage}
                                />
                        </View>
                       <View style={estilos.contenedorDetalleProducto}>
                           <View style={estilos.favoritos}>
                              
                                <Text style={estilos.itemPrice}>${route.params.item.item.productPrice}</Text>
                                {fav
                                    ? <Icon name="heart" color="red" size={35} onPress={()=>DltfavProduct(route.params.item.item.productId)}/>
                                    : <Icon name="heart-o" color="red" size={35} onPress={()=>favProduct(route.params.item)}/>}
                           </View>
                            <Text style={estilos.envio}>Envio gratis</Text>
                            <Divider />
                            <Text style={estilos.detalleTitle}>Decripcion</Text>
                            <Text style={estilos.detalle}>{route.params.item.item.productDetail}</Text>
                       </View>
                        <View style={{padding:10}}>
                            <Text style={{textAlign:'center',fontFamily:'open-sans',fontSize:15}}>Cantidad</Text>
                            <View style={estilos.cantidad}>
                                <Button 
                                    type="clear" 
                                    buttonStyle={estilos.cantBtn} 
                                    icon={<Icon name="chevron-left" color="black" size={20}/>} 
                                    onPress={()=>contadorCantidad(null)}
                                />
                                <Text style={estilos.contCant}>{contador}</Text>
                                <Button 
                                    type="clear" 
                                    buttonStyle={estilos.cantBtn} 
                                    icon={<Icon name="chevron-right" 
                                    color="black" size={20}/>}
                                    onPress={()=>contadorCantidad('suma')}
                                    />
                            </View>
                        </View>

                        <View style={estilos.contenedorBotones}>
                            <Button 
                                type="solid"
                                title=" Agregar al carrito"
                                titleStyle={estilos.btn}
                                icon={<Icon name="cart-plus" color="white" size={20}/>}
                                onPress={()=>additem(route.params.item)}
                            />
                        </View>
                    </View>
            </View>
        </ScrollView>
       
    )
}

const estilos = StyleSheet.create({
    contenedorPrincipal:{
        padding:10,
        backgroundColor:'#F5F5F5'
    },
    contenedorDetalle:{
        backgroundColor:'white',
        width:370,
        height:800
    },
    contenedorTitle:{
        height:'auto',
        padding:10,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    itemTitle:{
        fontFamily:'open-sans',
        fontSize: 18
    },
    contenedorImagen:{
       height:'auto',
       alignItems:'center'
    },
    prdImage:{
        width:250,
        height:250
    },
    contenedorDetalleProducto:{
        marginTop:15,
        padding:10,
    },
    favoritos:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    itemPrice:{
        fontFamily:'open-sans',
        fontWeight:'bold',
        fontSize:30
    },
    envio:{
        marginTop:15,
        fontFamily:'open-sans',
        color:'green',
        fontSize:18,
        marginBottom:10,
    },
    detalleTitle:{
        marginTop:10,
        fontFamily: 'open-sans',
        fontSize:16,
    },
    detalle:{
        marginTop:5,
        fontFamily:'open-sans',
        fontSize:15,
    },
    cantidad:{
        marginTop:20,
        flexDirection:'row',
        justifyContent:'space-evenly'
    },
    cantBtn:{
        width:80,
        height:'auto',
        borderWidth:1,
        borderColor:'black'
    },
    contCant:{
        fontFamily:'open-sans',
        fontWeight:'bold',
        fontSize:25,
    },
    contenedorBotones:{
        marginTop:10,
        padding:10,
    },
    btn:{
        fontFamily:'open-sans',
    },
})


export default ProductDesc;