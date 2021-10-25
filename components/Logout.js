import React from 'react'
import {View,StyleSheet} from 'react-native'
import {Button} from 'react-native-elements'
import { useDispatch } from 'react-redux'
import { logout } from '../store/actions/auth.action'
import Icon from 'react-native-vector-icons/FontAwesome';

const Logout = () =>{

    const dispatch = useDispatch()

    const logoutUser = () => dispatch(logout())

    return(
        <View>
            <Button 
                type="clear"
                buttonStyle={estilos.boton}
                icon={<Icon name="sign-out" color="white" size={25} />}
                onPress={()=>logoutUser()}
            />
        </View>
    )
}

const estilos = StyleSheet.create({
    contenedorPrincipal:{

    },
    boton:{

    },
})

export default Logout;