import {
    PREGNANCY_UPDATE, PREGNANCY_CREATE, PREGNENT_SAVE, PREGNANCY_FETCH_LOAD_START, PREGNANCY_FETCH_LOAD_END
} from '../actions/types';

const INITIAL_STATE = {
    HHNumber: '',
    PregnantName: '',
    PhoneNumber: '',
    NPregnant: '',
    LPerioddate: '',
    EDeliveryplace: '',
    FirstDose: '',
    SecondDose: '',
    DeliveryDate: '',
    Dplace: '',
    FirstWeightDate: '',
    Nchild: '',

};

export default (state = INITIAL_STATE, action) => {
    console.log(action.payload);
    switch (action.type) {
        case PREGNANCY_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
        case PREGNANCY_CREATE:
            return INITIAL_STATE;
        case PREGNENT_SAVE:
            return INITIAL_STATE;
        case PREGNANCY_FETCH_LOAD_START:
            console.log('inside reducer', action.payload);
            return { Loading: action.payload };
        case PREGNANCY_FETCH_LOAD_END:
            return { Loading: action.payload };
        default:
            return state;

    }
};