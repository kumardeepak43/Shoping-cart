// for Add Item to cart 

export const addCart = (product) => {
    return{
        type : "ADDITEM",
        payload : product
    }
}


export const delCart = (product) => {
    return{
        type : "DELCART",
        payload : product
    }
}