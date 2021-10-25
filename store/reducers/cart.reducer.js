import {ADD_ITEM_CART,DELETE_ITEM_CART} from '../actions/cartList.action'


const INITIAL_STATE = {
    cartlist:[],
    total:null
}

/* console.log(INITIAL_STATE) */

const CartReducer = (state=INITIAL_STATE,action) =>{
    switch(action.type){
        case ADD_ITEM_CART:
            return{
                ...state,
                cartlist:state.cartlist.concat(action.payload),
            }
        case DELETE_ITEM_CART:
           /*  console.log('id de prod:'+action.payload) */
            return{
                ...state,
                cartlist:state.cartlist.filter(item => item.item.productId !== action.payload),
            }

        default:
            return state;
    }
}

export default CartReducer;