import {ADD_TO_CART, REMOVE_FORM_CART} from '../actionTypes/actionTypes'

export const addToCard = (product) => {
    return {
        type: ADD_TO_CART,
        payload: product 
    };
};

export const removeFormCart = (product) => {
    return {
        type: REMOVE_FORM_CART,
        payload: product,
    };
};