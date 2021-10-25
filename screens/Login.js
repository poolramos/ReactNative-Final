import React,{useState} from 'react'
import {View,StyleSheet,ScrollView,Alert} from 'react-native'
import {Input,Card,Button,Image} from 'react-native-elements'
import Color from '../constant/Color'
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch} from 'react-redux'
import { login } from '../store/actions/auth.action';

//Imagenes
import Logo from '../assets/images/logo.png'

const Login = ({navigation}) =>{

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const dispatch = useDispatch()
    const guardarEmail = email => setEmail(email)
    const guardarPass = password => setPassword(password)
    
    const loginUser = () =>{
        if(!email || !password)
            return Alert.alert('Existen campos vacios')

        dispatch(login(email,password))
    }

    return (
        <ScrollView>
             <View style={estilos.contenedorPrincipal}>
                 
                 <View style={estilos.contenedorImagen}>
                     <Image 
                         source={Logo}
                         containerStyle={estilos.logo}
                     />
                 </View>
             <Card containerStyle={estilos.card}>
                     <Input 
                         label="Usuario"
                         placeholder=" aqui..."
                         autoCorrect={false}
                         keyboardType='default'
                         leftIcon={<Icon name="user" color="black" size={20}/>}
                         onChangeText={(value)=>guardarEmail(value)}
                         value={email}
                         
                     />
                     <Input 
                         label="Contraseña"
                         placeholder="aqui..."
                         autoCorrect={false}
                         keyboardType='default'
                         secureTextEntry={true}
                         leftIcon={<Icon name="key" color="black" size={20}/>}
                         onChangeText={(value)=>guardarPass(value)}
                         value={password}
                     />
                     <Button 
                         title="Ingresar"
                         type="solid"
                         buttonStyle={estilos.botonLogin}
                         titleStyle={estilos.tituloBoton}
                         onPress={loginUser}
                     />
                     <Button 
                         title="No tienes una cuenta? Presiona aqui"
                         type="clear"
                         buttonStyle={estilos.botonRegister}
                         titleStyle={estilos.tituloBtnRegister}
                         onPress={()=>{
                             navigation.navigate('register')
                         }} 
                     />
             </Card>
         </View>
        </ScrollView>   
    )
}

const estilos = StyleSheet.create({
    contenedorPrincipal:{
    marginTop: 50,
     padding:10,
    },
    card:{
     borderRadius:20,
    },
    botonLogin:{
        backgroundColor: Color.primario,
        marginTop:10,
        marginBottom:10   
    },
    tituloBoton:{
        fontWeight:'bold',
        fontSize:18,
        fontFamily:'open-sans'
    },
    contenedorImagen:{
        padding:10,
        justifyContent:'center',
        alignItems:'center'
    },
    logo:{
        width:150,
        height: 150,
    },
    input:{
        
    },
    
})


export default Login;