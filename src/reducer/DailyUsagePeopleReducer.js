import {
    DAILY_USAGE_UPDATE,
    DAILY_USAGE_CREATE,
    DAILY_USAGE_CREATE_SUCCESS,
    DAILY_USAGE_CREATE_FAIL,
    DAILY_USAGE_SAVECHANGES_SUCCESS
} from '../actions/types';


const INITIAL_STATE = {
    six_months_to_one_year: 0,
    one_year_to_three_year: 0,
    three_year_to_six_year: 0,
    total1: 0,
    total2: 0,
    totalfinal: 0,
    pw_prenatal: 0,
    pw_postnatal: 0,
    pw_3rdgrade: 0,
    pw_4thgrade: 0,
    DPickdob: '',
    nutritious_food: '',
    protien_food: '',
    oil: '',
    jaggery: '',
    chilli: '',
    egg: '',
    salt: '',
    grams: '',
    mustard_seeds: '',
    rice: '',
    wheat: '',
    amalice_rich: '',
    green_gram: '',
    uid: ''

};

export default (state = INITIAL_STATE, action) => {
  //  console.log(action.payload);
    switch (action.type) {
        case DAILY_USAGE_UPDATE:
            return { ...state, [action.payload.name]: action.payload.value };
        case DAILY_USAGE_CREATE:
            return INITIAL_STATE;
        case DAILY_USAGE_CREATE_SUCCESS:
            // console.log('login success');
            return INITIAL_STATE;
        case DAILY_USAGE_CREATE_FAIL:
            return INITIAL_STATE;
        case DAILY_USAGE_SAVECHANGES_SUCCESS:
            return INITIAL_STATE;
        default:
            return state;
    }
};
