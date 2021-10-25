import React from 'react'
import {View,StyleSheet,Text,FlatList} from 'react-native'
import {Image} from 'react-native-elements'
import Color from '../constant/Color'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem'
import { useDispatch } from 'react-redux'
import {deleteItemCart} from '../store/actions/cartList.action'
import sinProductos from '../assets/images/sinproductos.png'
import NoItem from '../components/NoItem'

const CartProduct = () =>{

    const items = useSelector(state=>state.cartlist.cartlist)
    /* const cantPrd = useSelector(state=>state.cartlist.cantPrd) */

    /* console.log(items) */

    const dispatch = useDispatch();
    const dltItem = (itemId)=>{
        dispatch(deleteItemCart(itemId))
    }


    return (
        <View>
            {items.length > 0
                ? <FlatList data={items} renderItem={(data)=><CartItem item={data.item} dltItem={dltItem} keyExtractor={(item,index)=>item.productName}/>}/>
                : <NoItem title="Aun no tienes productos en tu carrito" image={sinProductos} /> }
        </View>
    )
}

const estilos = StyleSheet.create({
    contenedorPrincipal:{
        backgroundColor:'#F5F5F5'
    },
    sinItems:{
        padding:10,
        justifyContent:'center',
        alignItems:'center',
        marginTop:20
    },
    imagenCarrito:{
        width: 100,
        height:100
    },
    sinPrd:{
        fontFamily:'open-sans',
        fontSize:15,
        marginTop:10
    },
})


export default CartProduct;