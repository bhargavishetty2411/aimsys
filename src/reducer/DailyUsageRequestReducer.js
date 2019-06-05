import {
  DAILY_USAGE_STOCK_UPDATE,
  DAILY_USAGE_STOCK_CREATE_SUCCESS,
  DAILY_USAGE_STOCK_CREATE,
  DAILY_USAGE_STOCK_SAVECHANGES_SUCCESS,
  DAILY_USAGE_STOCK_CREATE_FAIL
} from '../actions/types';

const INITIAL_STATE = {
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
  DPickdobStock: '',
  Oralrehydrationsalts: 0,
  Chloroquine: 0,
  Iron_and_folic_acid: 0,
  Co_trimoxazole_tablet: 0,
  Co_trimoxazole_syrup: 0,
  Mebendazole: 0,
  Benzyl_benzoate: 0,
  Vitamin_A_solution: 0,
  Aspirin: 0,
  Sulphadimidine: 0,
  Paracetamol: 0,
  uid: ''
};

export default (state = INITIAL_STATE, action) => {
  //  console.log(action.payload);
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
