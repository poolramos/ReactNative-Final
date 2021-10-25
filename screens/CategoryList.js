import React,{useEffect,useState} from 'react'
import {View,StyleSheet,Text,TouchableOpacity,FlatList} from 'react-native'
import {Image,Divider} from 'react-native-elements'
import {} from 'react-native-paper'
import { useSelector } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome';

const CategoryList = ({route,navigation}) =>{

    const productos = useSelector(state=>state.prdlist.list)
    const [prdCategory,setPrdCategory] = useState([])
   
    let misPrd = []
    const loadProducts = () =>{
        misPrd = productos.filter(item=>item.item.productCategorie == route.params.categoria)
        setPrdCategory(misPrd)
    }

    const viewProduct = (prd) =>{
        navigation.navigate('Product',{
            item:prd,
        })
    }


    useEffect(()=>{
        loadProducts()
    },[])


    return(
        <View style={estilos.contenedorPrincipal}>
            <FlatList 
                data={prdCategory}
                renderItem={(data)=>
                    <TouchableOpacity onPress={()=>viewProduct(data.item)}>
                        <View style={estilos.contenedorItem}>
                            <View>
                                <Image source={{uri:data.item.image}} containerStyle={estilos.itemImage}/>
                            </View>
                            <View style={estilos.contenedorDetalle}>
                                <Text style={estilos.title}>{data.item.item.productName}</Text>
                                <Text style={estilos.price}>${data.item.item.productPrice}</Text>
                                {data.item.item.productSale=="si" 
                                    && <View style={estilos.prdSale}>
                                        <Icon name="bolt" color="#009BFF" size={20}/>
                                        <Text style={{fontFamily:'open-sans',textAlign:'right',marginLeft:5,fontFamily:'open-sans'}}>Oferta</Text>
                                      </View>
                                }
                            </View>
                        </View>
                    </TouchableOpacity>        
                }
                key={item=>item.index}
            />
        </View>
    )
}

const estilos = StyleSheet.create({
    contenedorPrincipal:{
        padding:10,
    },
    contenedorItem:{
        flexDirection:'row',
        justifyContent:'flex-start',
        backgroundColor: 'white',
        margin:5,
        borderRadius:10,
    },
    itemImage:{
        width:100,
        height:100
    },
    contenedorDetalle:{
        margin:10
    },
    title:{
        fontFamily:'open-sans',
        fontSize:18,
    },
    price:{
        fontFamily:'open-sans',
        fontSize:20
    },
    prdSale:{
        flexDirection:'row',
        margin:10
    },
})

export default CategoryList;