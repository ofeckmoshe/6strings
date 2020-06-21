import fetcher from '../server-api/fetcher';

import { GET_PRODUCTS_BY_ARRIVAL, GET_PRODUCTS_BY_SALES, GET_BRANDS, GET_WOODS, GET_PRODUCTS_TO_SHOP } from './types';
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
            return {
                size: response.data.size,
                articles: response.data.articles
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