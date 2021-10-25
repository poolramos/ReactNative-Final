export const ADD_FAV_ITEM = 'ADD_FAV_ITEM';
export const DELETE_FAV_ITEM = 'DELETE_FAV_ITEM';
export const FIND_ITEM = 'FIND_ITEM'

export const addFavItem = (item) =>{
   /*  console.log(item.item) */
    return{
        type: ADD_FAV_ITEM,
        payload: item,
    }
}

export const deleteFavItem = (itemId) =>({
    type:DELETE_FAV_ITEM,
    payload:itemId,
})

export const findItem = (itemId) =>({
    type:FIND_ITEM,
    payload:itemId
})