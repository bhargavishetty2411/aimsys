import { FETCH_ALL } from '../actions/types';

const INITIAL_STATE = {};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_ALL:
            console.log('inside reducer', action.payload);
            return action.payload;
           
        default:
            return state;
    }
};
