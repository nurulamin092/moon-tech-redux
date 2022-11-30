import { ADD_TO_CART, REMOVE_FORM_CART } from "../actionTypes/actionTypes";

const initialState = {
    cart:[]
}

const productReducer = (state=initialState,action) => {
    switch (action.type) {
            
        case ADD_TO_CART: 
            return {
                ...state,
                    cart:[...state.cart,action.payload]
                
            }
        case REMOVE_FORM_CART:
            return {

            }
    
        default:
            return state;
    }
  
}
export default productReducer;