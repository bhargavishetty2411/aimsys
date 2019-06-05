
import { CHILDUPDATE, CHILD_CREATE, CHILD_SAVE, CHILD_FETCH_LOAD_START, CHILD_FETCH_LOAD_END } from '../actions/types';
var _ = require('lodash');

const INITIAL_STATE = {
    HNumber: '',
    CName: '',
    CMotherName: '',
    status: '',
    option: '',
    DPickdob: '1995-03-05',
    DPickregdate: '1995-03-05',
    ebenifits: '1995-03-05',
    health: '',
    babytype: '',
    Loading: false
};

export default (state = INITIAL_STATE, action) => {
    console.log('Inside action here', action.payload);
    switch (action.type) {
        case CHILDUPDATE:
            return { ...state, [action.payload.name]: action.payload.value };
        case CHILD_CREATE:
            return INITIAL_STATE;
        case CHILD_SAVE:
            return INITIAL_STATE;
        case CHILD_FETCH_LOAD_START:
            return { Loading: action.payload };
        case CHILD_FETCH_LOAD_END:
            return { Loading: action.payload };
        default:
            return state;
    }
};
