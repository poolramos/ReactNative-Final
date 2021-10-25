import {SELECT_ITEM,ADD_ITEM,FILTER_ITEM} from '../actions/productlist.action'
import {products} from '../../mockupdata/Products'


const INITIAL_STATE = {
    list:products,
    selected:null,
}

const ProductListReducer = (state=INITIAL_STATE,action) =>{
    switch(action.type){
        case ADD_ITEM:
            return{
                ...state,
                list: state.list.concat(action.payload)
            }
        case FILTER_ITEM:
            return{
                ...state,
                list: state.list.filter(item=>item.item.productCategorie == action.payload)
            }
        default:
            return state
    }
}

export default ProductListReducer;