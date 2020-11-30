import axios from 'axios';
import { PRODUCT_ACTION_TYPES } from "../config/constants";
import * as apiConfig from './../config/api';

export function getAllProducts() {
  return {
    type: PRODUCT_ACTION_TYPES.FETCH_ALL,
    payload: axios.get(`${apiConfig.ROOT_URL}products/`),
  }
}

export function getProductById(id: string) {
  return {
    type: PRODUCT_ACTION_TYPES.GET_BY_ID,
    payload: axios.get(`${apiConfig.ROOT_URL}products/${id}`),
  }
}