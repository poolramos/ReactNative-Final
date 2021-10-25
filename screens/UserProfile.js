import React from 'react'
import {StyleSheet,View,Text} from 'react-native'
import {Header,Button} from 'react-native-elements'
import Color from '../constant/Color'
import { useDispatch } from 'react-redux'
import { logout } from '../store/actions/auth.action'


const UserProfile = () =>{

    const dispatch = useDispatch()
    const logoutUser = () =>{
        dispatch(logout())
    }

    return(
        <View>
            {/* <Header 
                rightComponent={<Button title="logout" onPress={logoutUser}/>}
                containerStyle={{
                    backgroundColor:Color.primario
                }}
            /> */}
            <Text>Pantalla de usuario</Text>
        </View>
    )
}

const estilos = StyleSheet.create({
    contenedorPrincipal:{

    },
})


export default UserProfile;