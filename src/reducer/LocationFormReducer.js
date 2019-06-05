import {
    LOCATION_FORM, LOCATION_CHECK, LOCATION_CREATE, LOCATION_LOADING_START, LOCATION_LOADING_END, LOCATION_REMOVE
} from '../actions/types';

const INITIAL_STATE = {
    latitude: 0,
    longitude: 0,
    status: '',
    uid: '',
    Loadding: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOCATION_CHECK:
            return { ...state, status: action.payload };
        case LOCATION_FORM:
            return { ...state, [action.payload.name]: action.payload.value };
        case LOCATION_CREATE:
            return { INITIAL_STATE, status: true };
        case LOCATION_REMOVE:
            return { status: false };
        case LOCATION_LOADING_START:
            return { ...state, Loadding: true };
        case LOCATION_LOADING_END:
            return { ...state, Loadding: false };
        default:
            return state;
    }
};
