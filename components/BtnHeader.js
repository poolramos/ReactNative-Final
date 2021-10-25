import React from 'react'
import {View,StyleSheet} from 'react-native'
import {Badge,Button} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const BtnHeader = () =>{

    const navigation = useNavigation();
    const cantPrd = useSelector(state=>state.cartlist.cartlist) 
    
    return(
        <View style={estilos.contenedorPrincipal}>
             <Button 
                type="clear"
                icon={<Icon name="plus" color="white" size={20}/>}
                onPress={()=>navigation.push('agregar Producto')}
            />
            <Button 
                type="clear"
                onPress={()=>navigation.push('Cart')}
                icon={<Icon name="shopping-cart" color="white" size={25}/>}
            />
            <Badge value={cantPrd.length} containerStyle={estilos.contenedorBadge} badgeStyle={estilos.badgestyle} textStyle={{color:'black',fontWeight:'bold'}} />
        </View>
    )
}


const estilos = StyleSheet.create({
    contenedorPrincipal:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    contenedorBadge:{
        marginRight:5,
        marginLeft:5,
        marginTop:5,
    },
    badgestyle:{
        backgroundColor:'white',
        
    },
})

export default BtnHeader;