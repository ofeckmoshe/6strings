import fetcher from '../server-api/fetcher';

import { GET_PRODUCTS_BY_ARRIVAL, GET_PRODUCTS_BY_SALES, GET_BRANDS, GET_WOODS } from './types';
import { PRODUCT_SERVER } from '../components/utils/misc';

export function getProductsByArrival(){
    const request = fetcher.get(`${PRODUCT_SERVER}/articles?sortBy=createdAt&order=desc&limit=4`)
    .then(response => response.data);

    return {
        type: GET_PRODUCTS_BY_ARRIVAL,
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