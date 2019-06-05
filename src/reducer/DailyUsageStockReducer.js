import {
  DAILY_USAGE_STOCK_UPDATE,
  DAILY_USAGE_STOCK_CREATE_SUCCESS,
  DAILY_USAGE_STOCK_CREATE,
  DAILY_USAGE_STOCK_SAVECHANGES_SUCCESS,
  DAILY_USAGE_STOCK_CREATE_FAIL
} from '../actions/types';

const INITIAL_STATE = {
  food_received: 0,
  food_provided: 0,
  food_remaining: 0,
  nutritious_food: 0,
  protien_food: 0,
  oil: 0,
  jaggery: 0,
  chilli: 0,
  egg: 0,
  salt: 0,
  grams: 0,
  mustard_seeds: 0,
  amalice_rich: 0,
  green_gram: 0,
  food_provided_today: 0,
  Extra: 0,
  DPickdobStock: '',
  uid: ''
};

export default (state = INITIAL_STATE, action) => {
  console.log('new date here', state.DPickdobStock);
  switch (action.type) {
    case DAILY_USAGE_STOCK_UPDATE:
      return { ...state, [action.payload.name]: action.payload.value };
    case DAILY_USAGE_STOCK_CREATE:
      return INITIAL_STATE;
    case DAILY_USAGE_STOCK_CREATE_SUCCESS:
      // console.log('login success');
      return INITIAL_STATE;
    case DAILY_USAGE_STOCK_CREATE_FAIL:
      return INITIAL_STATE;

    case DAILY_USAGE_STOCK_SAVECHANGES_SUCCESS:
      return INITIAL_STATE;
    default:
      return state;
  }
};
