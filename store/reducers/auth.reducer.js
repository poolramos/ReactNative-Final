import {SIGNUP,SIGNIN,LOGOUT} from '../actions/auth.action'
import {User} from '../../constant/User'

const INITIAL_STATE = {
    token:null,
    user: null,
};


const AuthReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case SIGNUP:
            return{
                ...state,
                token:action.token,
                user:action.user,
            };
        case SIGNIN:
            return{
                ...state,
                token:action.token,
                user:action.user
            };
        case LOGOUT:
            return{
                ...state,
                token:action.token,
                user:action.user,
            }
        default:
            return state;
    }
}

export default AuthReducer;