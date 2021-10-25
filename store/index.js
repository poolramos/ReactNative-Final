import {createStore,combineReducers,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'

//Componentes
import PrdListReducer from './reducers/productlist.reducer'
import CartListReducer from './reducers/cart.reducer'
import AuthReducer from './reducers/auth.reducer'
import FavReducer from './reducers/fav.reducer'


const RootReducer = combineReducers({
    prdlist: PrdListReducer,
    cartlist:CartListReducer,
    auth: AuthReducer,
    favlist:FavReducer,
})

export default createStore(
    RootReducer,
    compose(
        applyMiddleware(thunk),
    ))