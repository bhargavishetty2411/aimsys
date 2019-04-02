import { NUTRITIONFETCH } from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case NUTRITIONFETCH:
         return action.payload;
        default:
            return state;
    }
};  
