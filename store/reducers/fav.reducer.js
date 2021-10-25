import { ADD_FAV_ITEM , DELETE_FAV_ITEM, FIND_ITEM } from "../actions/fav.action";


const INITIAL_STATE = {
    favlist:[],
}

const FavReducer = (state=INITIAL_STATE,action) =>{
    switch(action.type){
        case ADD_FAV_ITEM:
            return{
                ...state,
                favlist:state.favlist.concat(action.payload)
            }
        case DELETE_FAV_ITEM:
            console.log(INITIAL_STATE)
            return{
                ...state,
                favlist:state.favlist.filter(item => item.item.productId !== action.payload)
            }
        case FIND_ITEM:
            return{
                ...state,
                favlist: state.favlist.filter(item => item.productId == action.payload)
            }
        default:
            return state;
    }
}

export default FavReducer;