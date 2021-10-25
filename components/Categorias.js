import React,{useState} from 'react'
import {Text,View,StyleSheet,FlatList,TouchableOpacity} from 'react-native'
import {Button,Image} from 'react-native-elements'
import {categorias} from '../mockupdata/Categorias'


const Categorias = ({selectCategory}) =>{
    
    return(
        <View style={estilos.contenedorPrincipal}>
            <FlatList
                indicatorStyle="white"
                horizontal={true}
                data={categorias}
                renderItem={(data)=>
                    <TouchableOpacity style={estilos.catItem} onPress={()=>selectCategory(data.item.descripcion)}>
                        <View style={{alignItems:'center'}}>
                            <Image source={{uri:data.item.imagen}} containerStyle={estilos.itemImagen}/>
                        </View>
                        <Text style={estilos.itemTitle}>{data.item.descripcion}</Text>
                    </TouchableOpacity>
                }
                key={item=>item.index}
            />
        </View>
    )
}


const estilos = StyleSheet.create({
    contenedorPrincipal:{
        
    },
    catItem:{
        padding:10,
        margin:10,
        borderWidth:0.5,
        borderRadius:10,
        borderColor:'#DADADA',
        backgroundColor:'white'
    },
    itemImagen:{
        width:50,
        height:50,
    },
    itemTitle:{
        textAlign:'center'
    },
})


export default Categorias;