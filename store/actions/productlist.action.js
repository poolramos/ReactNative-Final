export const FILTER_ITEM = 'FILTER_ITEM'
export const SELECT_ITEM = 'SELECT_ITEM'
export const ADD_ITEM = 'ADD_ITEM'

export const addItem = (item,image) =>{
    return /* async */ dispatch =>{

         /* console.log(item) */
        /* console.log(image)  */

        /* const fileName = image.split('/').pop()
        const Path = FileSystem.documentDirectory + fileName; */

        try {

            dispatch({
                type: ADD_ITEM,
                payload: {
                    item,
                    image: image,
                },
            });
        } catch (err) {
            console.log(err.mesage);
            throw err;
        }

    }
}


export const selectItem = (prdId) =>({
    type: SELECT_ITEM,
    payload: prdId
})


export const filterList = (categoria) =>({
    type:FILTER_ITEM,
    payload: categoria
})