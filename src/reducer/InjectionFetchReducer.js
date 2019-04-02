import { INJECTIONFETCH } from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INJECTIONFETCH:
         return action.payload;
        default:
            return state;
    }
};  