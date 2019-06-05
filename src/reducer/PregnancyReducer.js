import {
    PREGNANCYS_FETCH_SUCCESS,
    PREGNANCY_FETCH_LOAD_START,
    PREGNANCY_FETCH_LOAD_END
} from '../actions/types';
//import console = require('console');

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PREGNANCYS_FETCH_SUCCESS:
            return action.payload;
        default:
            return state;
    }
};
