import React,{useEffect,useState} from 'react'
import {View,StyleSheet,Text,FlatList,TouchableOpacity} from 'react-native'
import {Button,Image} from 'react-native-elements'
import {} from 'react-native-paper'
import { useSelector } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome';

const PrdSaleItem = ({item,viewProd}) =>{


    return(
        <TouchableOpacity style={estilos.contenedorItem} onPress={()=>viewProd(item)}>
            <Image source={{uri:item.image}} containerStyle={estilos.imagenOferta}/>
        </TouchableOpacity>
    )
}

const Ofertas = ({viewProd}) =>{

    const products = useSelector(state=>state.prdlist.list)
    const [prdSale,setPrdSale] = useState([])

    let misPrd = []
    const loadProductSale = () =>{
        misPrd = products.filter(item=>item.item.productSale == "si")
        setPrdSale(misPrd) 
    }
    useEffect(()=>{
        loadProductSale()
    },[])

    return(
        <View style={estilos.contenedorPrincipal}>
            <View style={estilos.sale}>
                <Icon name="bolt" color="#009BFF" size={25}/>
                <Text style={estilos.saleTitle}>Ofertas</Text>
            </View>
            <FlatList 
                data={prdSale}
                horizontal={true}
                indicatorStyle="white"
                renderItem={(data)=>
                    <PrdSaleItem 
                        item={data.item}
                        viewProd={viewProd}
                    />
                }
                keyExtractor={item=>item.item.productId}
            />
        </View>
    )
}

const estilos = StyleSheet.create({
    contenedorPrincipal:{
        padding:5
    },
    contenedorItem:{
        margin:10,
    },
    imagenOferta:{
        width:150,
        height:150,
        borderRadius:10,
    },
    sale:{
        flexDirection:"row",
        justifyContent:'flex-start',
    },
    saleTitle:{
        marginLeft:10,
        fontFamily:'open-sans',
        fontSize:20
    },
})


export default Ofertas;