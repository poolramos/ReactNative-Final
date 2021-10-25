import React from 'react';
import {View,StyleSheet,SafeAreaView,ScrollView} from 'react-native';
import Color from '../constant/Color';
import { useSelector} from 'react-redux';
import ProductList from '../components/lista/ProductList';
import NoItem from '../components/NoItem';
import sinProductos from '../assets/images/informacion.png'
import Ofertas from '../components/Ofertas';
import Categorias from '../components/Categorias';


const Home = ({navigation}) =>{



    const productList = useSelector(state=>state.prdlist.list)

    const categoryResult = (value) =>{
        navigation.navigate('Categoria',{
            categoria:value,
        })
    }

    const viewProduct = (item) =>{
        navigation.navigate('Product',{
            item:item,
        })
    }
    
    return(
        <SafeAreaView>
            <ScrollView style={estilos.contenedorPrincipal}>
                <Categorias selectCategory={categoryResult} />
                <Ofertas viewProd={viewProduct} />
                {productList.length > 0
                    ? <ProductList 
                    productList={productList}
                    viewProd={viewProduct}
                />  : <NoItem title="Sin productos" image={sinProductos} /> }
            </ScrollView>
        </SafeAreaView>
           
    )
}

const estilos = StyleSheet.create({
    contenedorPrincipal:{
        padding:10,
        minHeight:800,
        maxHeight:'auto',
        backgroundColor:'#F5F5F5'
    },
})

export default Home;