import React,{useState} from 'react'
import {View,StyleSheet, Alert,ScrollView} from 'react-native'
import {Input,Card,Button,Image,Header} from 'react-native-elements'
import Color from '../constant/Color'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch } from 'react-redux';
import { signup } from '../store/actions/auth.action';

const Register = ({}) =>{

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [passwordRepeat,setPasswordRepeat] = useState('')
    const [error,setError] = useState('')
    const [disabledBoton,setDisabledBoton] = useState(false)

    const dispatch = useDispatch()
    const guardarEmail = email => setEmail(email)
    const guardarPass = password => setPassword(password)


    const validatePassword = () =>{
        if(passwordRepeat !== password){
            setError('Las contraseñas no son iguales')
            setDisabledBoton(true)
        }
        else{
            setError('')
            setDisabledBoton(false)
        }
    }   

    const Registrarse = () =>{
        if(!email || !password)
            Alert.alert('Existen campos vacios')

         dispatch(signup(email,password))
    }
    
    

    return (
        <ScrollView>
            <View>
                <View style={estilos.contenedorPrincipal}>
                    
                <Card containerStyle={estilos.card}>
                        <Input 
                            label="Email"
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
                        <Input 
                            label="Repetir Contraseña..."
                            placeholder="aqui..."
                            autoCorrect={false}
                            keyboardType='default'
                            secureTextEntry={true}
                            leftIcon={<Icon name="key" color="black" size={20}/>}
                            onChangeText={(value)=>setPasswordRepeat(value)}
                            onEndEditing={()=>validatePassword()}
                            errorMessage={error}
                        />
                        <Button 
                            title="Registrarse"
                            type="solid"
                            buttonStyle={estilos.botonRegister}
                            titleStyle={estilos.tituloBoton}
                            onPress={Registrarse} 
                            disabled={disabledBoton}
                        />
                </Card>
                </View>
            </View>
        </ScrollView>
        
    )
}

const estilos = StyleSheet.create({
    contenedorPrincipal:{
     padding:10
    },
    card:{
     borderRadius:20,
    },
    botonRegister:{
        backgroundColor: Color.primario,
        marginTop:10,
        marginBottom:10   
    },
    tituloBoton:{
        fontSize:18
    },
    contenedorImagen:{
        padding:20,
        justifyContent:'center',
        alignItems:'center'
    },
    logo:{
        width:150,
        height: 150,
    },
    
})

export default Register;