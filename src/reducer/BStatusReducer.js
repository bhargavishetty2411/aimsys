import { BSTATUS_FETCH } from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case BSTATUS_FETCH:
            return action.payload;            
        default:
            return state;
    }
};
