import {
    BPICTURE_FRORM, BPICTURE_CHECK,
    BPICTURE_CREATE, BPICTURE_REMOVE, BPFETCH_LOADING_START, BPFETCH_LOADING_END
} from '../actions/types';

const INITIAL_STATE = {
    BPicture: '',
    status: '',
    Loadding: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case BPICTURE_FRORM:
            return { ...state, [action.payload.name]: action.payload.value };
        case BPICTURE_CHECK:
            return { ...state, status: action.payload };
        case BPICTURE_CREATE:
            return { INITIAL_STATE, status: true };
        case BPICTURE_REMOVE:
            return INITIAL_STATE;
        case BPFETCH_LOADING_START:
            return { ...state, Loadding: true };
        case BPFETCH_LOADING_END:
            return { ...state, Loadding: false };
        default:
            return state;
    }
};
