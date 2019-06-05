import {
    HOUSEHOLD_UPDATE, HOUSEHOLD_CREATE, HOUSEHOLD_SAVE, HOUSEHOLD_FETCH_LOAD_END,
    HOUSEHOLD_FETCH_LOAD_START,HOUSEHOLD_NAME_FETCH_START,HOUSEHOLD_NAME_FETCH_END,
    FETCH_SUCESS,FETCH_END
} from '../actions/types';
const INITIAL_STATE = {

    HHNumber: '',
    HHName: '',
    DOB: '',
    sex: '',
    Caste: '',
    Relationship: '',
    Status: '',
    Designation: '',
    LiteracyRate: '',
    PhoneNumber: '',
    Address: '',
    Income: '',
    Disease1:'',
    Disease2:'',
    Disease3:'',
    Disability:'',
    DOE: '',
};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case HOUSEHOLD_UPDATE:
            return { ...state, [action.payload.name]: action.payload.value };
        case HOUSEHOLD_CREATE:
            return INITIAL_STATE;
        case HOUSEHOLD_SAVE:
            return INITIAL_STATE;
        case HOUSEHOLD_FETCH_LOAD_START:
            console.log('inside reducer', action.payload);
            return { Loading: action.payload };
        case HOUSEHOLD_FETCH_LOAD_END:
            return { Loading: action.payload };
         case HOUSEHOLD_NAME_FETCH_START:
        return { Loading: action.payload };
        case HOUSEHOLD_NAME_FETCH_END:
        return { Loading: action.payload };
        case FETCH_SUCESS:
        return { Loading: action.payload };
        case FETCH_END:
        return { Loading: action.payload };




        default:
            return state;
    }
};
