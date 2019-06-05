import {
    FACILTY_FORM, FACILITY_CREATE, FACILITY_CHECK,
    FACILITY_REMOVE, FACILITY_LOADING_START, FACILITY_LOADING_END
} from '../actions/types';

const INITIAL_STATE = {
    well: false,
    Punchayath: false,
    Borewell: false,
    Water: '',
    Medicine: '',
    Mother: '',
    Infant: '',
    Play: '',
    Toilet: '',
    Power: '',
    Btype: '',
    status: '',
    uid: '',
    Loadding: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FACILITY_CHECK:
            return { ...state, status: action.payload };
        case FACILTY_FORM:
            return { ...state, [action.payload.name]: action.payload.value };
        case FACILITY_CREATE:
            return { INITIAL_STATE, status: true };
        case FACILITY_REMOVE:
            return { status: false };
        case FACILITY_LOADING_START:
            return { ...state, Loadding: true };
        case FACILITY_LOADING_END:
            return { ...state, Loadding: false };
        default:
            return state;
    }
};
