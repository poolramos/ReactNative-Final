import React,{useState,useEffect} from 'react'
import {SafeAreaView,StyleSheet,Text,View,Switch,ScrollView} from 'react-native'
import {Input,Button,Image,CheckBox} from 'react-native-elements'
import { TextInput} from 'react-native-paper';
import Color from '../constant/Color'
import Categorias from '../components/Categorias';
import * as ImagePicker from 'expo-image-picker';
import { addItem } from '../store/actions/productlist.action';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import SelectDropdown from 'react-native-select-dropdown'

const addProduct = ({navigation}) =>{

    const newProduct = {
        productId:"",
        productName:"",
        productDetail:"",
        productPrice:"",
        productCategorie:"" 
    }
    const cantProduct = useSelector(state=>state.prdlist.list)
    const [product,setProduct] = useState(newProduct)
    const dispatch = useDispatch()
    const [image, setImage] = useState(null);
    const [categ,setCateg] = useState('')
    const categorias = ['Tablets y Celulares','Electronica','Informatica','Gamer','Otros']

      const imagePermission = async () =>{
        if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
              alert('Sorry, we need camera roll permissions to make this work!');
            }
          }
      }

      const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.cancelled) {
          setImage(result.uri);
        }
      };

      const saveProduct = (campo,valor) =>{
          setProduct({...product,[campo]:valor})
      }

      const addProduct = () =>{
          let nuevoId = cantProduct.length + 1
          product.productId = nuevoId
          product.productCategorie = categ
           dispatch(addItem(product,image)) 
           navigation.push('Home')
      }

    return(
        <SafeAreaView> 
            <ScrollView contentContainerStyle={estilos.contenedorPrincipal}>
                {/* <Text>add Product</Text> */}
                <View style={{flexDirection:'column',justifyContent:'center',marginBottom:20,alignItems:'center'}}>
                    {image && <Image source={{ uri: image }} style={{ width: 200, height: 200,borderRadius:12 }} />}
                    <View style={{flexDirection:'row',justifyContent:'center',marginBottom:20,alignItems:'center'}}>
                        <Button title="Seleccionar imagen" onPress={pickImage} type="clear"/>
                        {image && <Button type="clear" icon={<Icon name="trash" color="red" size={30}/>} onPress={()=>setImage(null)} />}
                    </View>
                </View>

                <TextInput
                    mode="outlined"
                    label="Nombre producto"
                    placeholder="aqui..."
                    style={estilos.input}
                    onChangeText={(value)=>saveProduct('productName',value)}
                />
                <TextInput
                    mode="outlined"
                    label="Descripcion producto"
                    placeholder="aqui..."
                    style={estilos.input}
                    onChangeText={(value)=>saveProduct('productDetail',value)}
                />
                <TextInput
                    mode="outlined"
                    label="Precio"
                    placeholder="aqui..."
                    style={estilos.input}
                    onChangeText={(value)=>saveProduct('productPrice',value)}
                    keyboardType="number-pad"
                />
               
              <View style={{alignItems:'center'}}>
                <SelectDropdown
                       buttonStyle={{margin:10,borderRadius:10,borderWidth:0.5}}
                        defaultButtonText="Categoria"
                        data={categorias}
                        onSelect={(selectedItem, index) => {
                            setCateg(selectedItem)
                        }}
                        buttonTextAfterSelection={(selectedItem, index) => {
                            // text represented after item is selected
                            // if data array is an array of objects then return selectedItem.property to render after item is selected
                            return selectedItem
                        }}
                        rowTextForSelection={(item, index) => {
                            // text represented for each item in dropdown
                            // if data array is an array of objects then return item.property to represent item in dropdown
                            return item
                        }}
                    />
              </View>


                <Button 
                    type="solid"
                    title="Publicar"
                    onPress={addProduct}
                    buttonStyle={estilos.btnPublicar}
                />
            </ScrollView>
        </SafeAreaView>
    )
}

const estilos = StyleSheet.create({
    contenedorPrincipal:{
        padding:10,
        height: 'auto',
    },
    input:{
        marginBottom:10
    },
    label:{
        marginBottom:10
    },
    switch:{
        flexDirection:'row',
        justifyContent:'center',
        alignContent:'center',
    },
    textoSwitch:{
        marginRight:10,
        fontFamily:'open-sans',
        fontWeight:'bold',
        fontSize:15
    },
    btnPublicar:{
        marginBottom:100
    },
})

export default addProduct;