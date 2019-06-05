import { CHILDFETCH } from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CHILDFETCH:
         return action.payload;
        default:
            return state;
    }
};  
