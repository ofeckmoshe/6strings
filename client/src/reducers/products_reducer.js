import { GET_PRODUCTS_BY_ARRIVAL,
         GET_PRODUCTS_BY_SALES,
         GET_BRANDS,
         ADD_BRAND,
         GET_WOODS, 
         ADD_WOOD,
         GET_PRODUCTS_TO_SHOP,
         ADD_PRODUCT,
         CLEAR_PRODUCT,
         GET_PRODUCTS_DETAILS,
         CLEAR_PRODUCT_DETAILS
         } from '../actions/types';

export default (state={}, action) => {
    switch(action.type) {
        case GET_PRODUCTS_BY_SALES:
            return { ...state, bySales: action.payload }
        case GET_PRODUCTS_BY_ARRIVAL:
            return { ...state, byArrival: action.payload }
        case GET_BRANDS:
            return { ...state, brands: action.payload }
        case ADD_BRAND:
            return { ...state, addBrand: action.payload.success, brands: action.payload.brands }
        case GET_WOODS:
            return { ...state, woods: action.payload }
        case ADD_WOOD:
            return { ...state, addWood: action.payload.success, woods: action.payload.woods }
        case GET_PRODUCTS_TO_SHOP:
            return { 
                    ...state,
                    toShop: action.payload.articles,
                    toShopSize: action.payload.size
                }
        case ADD_PRODUCT:
            return {
                ...state,
                addProduct: action.payload
            }
        case CLEAR_PRODUCT:
            return {
                ...state,
                addProduct: action.payload
            }
        case GET_PRODUCTS_DETAILS:
            return { ...state, productDetails: action.payload }
        case CLEAR_PRODUCT_DETAILS:
            return { ...state, productDetails: action.payload }
        default:
            return state;
    } 
};