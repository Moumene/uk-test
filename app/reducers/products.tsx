import initialState from './initialState';
import { PRODUCT_ACTION_TYPES } from './../config/constants';
import { FAILURE, REQUEST, SUCCESS } from '../utils/action-types';

interface actionType {
  type: string,
  payload: any,
}

export default (state = initialState.product, action: actionType) => {
  switch (action.type) {
    case REQUEST(PRODUCT_ACTION_TYPES.FETCH_ALL):
    case REQUEST(PRODUCT_ACTION_TYPES.GET_BY_ID):
      return {
        ...state,
        loading: true,
        errorMessage: null,
      }
    case FAILURE(PRODUCT_ACTION_TYPES.FETCH_ALL):
    case FAILURE(PRODUCT_ACTION_TYPES.GET_BY_ID):
      return {
        ...state,
        loading: false,
        errorMessage: action.payload?.data?.error || action.payload?.message,
      }
    case SUCCESS(PRODUCT_ACTION_TYPES.FETCH_ALL):
      return {
        ...state,
        loading: false,
        errorMessage: null,
        items: action.payload?.data,
      }
    case SUCCESS(PRODUCT_ACTION_TYPES.GET_BY_ID):
      return {
        ...state,
        loading: false,
        errorMessage: null,
        currentItem: action.payload.data,
      }
    case PRODUCT_ACTION_TYPES.RESET:
      return {
        ...initialState
      }
    default:
      return state
  }
}