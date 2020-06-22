import fetcher from '../server-api/fetcher';

import { GET_PRODUCTS_BY_ARRIVAL,
         GET_PRODUCTS_BY_SALES, 
         GET_BRANDS, GET_WOODS, 
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

export function getWoods(){
    const request = fetcher.get(`${PRODUCT_SERVER}/woods`)
        .then(response => response.data);

    return {
        type: GET_WOODS,
        payload: request
    }
};

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