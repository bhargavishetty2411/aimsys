import { IMAGEUPDATE, IMAGECREATE, IMAGE_FETCH_LOAD_START, IMAGE_FETCH_LOAD_END, IMAGEREMOVE } from '../actions/types';

const INITIAL_STATE = {
    UPicture: '',
    comment: 'none',
    imagetype: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case IMAGEUPDATE:
            return { ...state, [action.payload.name]: action.payload.value };
        case IMAGECREATE:
            return INITIAL_STATE;
        case IMAGEREMOVE:
            return INITIAL_STATE;
        case IMAGE_FETCH_LOAD_START:
            return { Loading: action.payload };
        case IMAGE_FETCH_LOAD_END:
            return { Loading: action.payload };
        default:
            return state;
    }
};
