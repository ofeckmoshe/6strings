import fetcher from '../server-api/fetcher';

import { GET_PRODUCTS_BY_ARRIVAL,
         GET_PRODUCTS_BY_SALES, 
         GET_BRANDS,
         ADD_BRAND,
         GET_WOODS, 
         ADD_WOOD,
         GET_PRODUCTS_TO_SHOP, 
         ADD_PRODUCT,
         CLEAR_PRODUCT } from './types';
import { PRODUCT_SERVER } from '../components/utils/misc';

export function getProductsByArrival(){
    const request = fetcher.get(`${PRODUCT_SERVER}/articles?sortBy=createdAt&order=desc&limit=4`)
        .then(response => response.data);

    return {
        type: GET_PRODUCTS_BY_ARRIVAL,
        payload: request
    }
};

export function getProductsToShop(skip, limit, filters = [], prevState = []){
    const data = {
        limit,
        skip,
        filters
    };

    const request = fetcher.post(`${PRODUCT_SERVER}/shop`, data)
        .then(response => {
            let newState = [ 
                ...prevState,
                ...response.data.articles
            ];

            return {
                size: response.data.size,
                articles: newState
            }
        });

    return {
        type: GET_PRODUCTS_TO_SHOP,
        payload: request
    }
};

export function getProductsBySales(){
    const request = fetcher.get(`${PRODUCT_SERVER}/articles?sortBy=sold&order=desc&limit=4`)
        .then(response => response.data);

    return {
        type: GET_PRODUCTS_BY_SALES,
        payload: request
    }
};


export function getBrands(){
    const request = fetcher.get(`${PRODUCT_SERVER}/brands`)
        .then(response => response.data);

    return {
        type: GET_BRANDS,
        payload: request
    }
};

export function addBrand(dataToSubmit, existingBrands){
    const request = fetcher.post(`${PRODUCT_SERVER}/brand`, dataToSubmit)
        .then(response => {
            let brands = [
                ...existingBrands,
                response.data.brand
            ];

            return {
                success: response.data.success,
                brands
            };
        });

        return {
            type: ADD_BRAND,
            payload: request
        }
}

export function getWoods(){
    const request = fetcher.get(`${PRODUCT_SERVER}/woods`)
        .then(response => response.data);

    return {
        type: GET_WOODS,
        payload: request
    }
};

export function addWood(dataToSubmit, existingWoods){
    const request = fetcher.post(`${PRODUCT_SERVER}/wood`, dataToSubmit)
        .then(response => {
            let woods = [
                ...existingWoods,
                response.data.wood
            ];

            return {
                success: response.data.success,
                woods
            };
        });

        return {
            type: ADD_WOOD,
            payload: request
        }
}

export function addProduct(datatoSubmit){

    const request = fetcher.post(`${PRODUCT_SERVER}/articles`, datatoSubmit)
                    .then(response => response.data);

    return {
        type: ADD_PRODUCT,
        payload: request
    }
}

export function clearProduct(){
    return {
        type: CLEAR_PRODUCT,
        payload: ''
    }
}