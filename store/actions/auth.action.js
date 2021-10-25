import { userLogin, userRegister } from "../../db"


export const SIGNUP = 'SIGNUP'
export const SIGNIN = 'SIGNIN'
export const LOGOUT = 'LOGOUT'

export const logout = () =>({
    type:LOGOUT,
    token:null,
    user:null
})

export const login =(email,password)=>{
    return async dispatch =>{

         const result  = await userLogin(email,password)
         let isExist = false
         let token = false
         result.rows._array.forEach(element => {
             if(email==element.email){
                isExist = true
                token = true
             }
         });
         
         dispatch({
            type: SIGNIN,
            token: token,
            user: isExist,
        }) 
    }
}



export const signup = (email,password) =>{
    return async dispatch =>{
        const result = await userRegister(email,password)
        console.log(result)
        dispatch({
                type: SIGNUP,
                token:true,
                user:result.insertId
            })
    }
}