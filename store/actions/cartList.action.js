export const ADD_ITEM_CART = 'ADD_ITEM_CART';
export const DELETE_ITEM_CART = 'DELETE_ITEM_CART';

export const addItemCart = (item) =>({
    type:ADD_ITEM_CART,
    payload:item
})

export const deleteItemCart = (itemId) =>({
    type:DELETE_ITEM_CART,
    payload: itemId
})