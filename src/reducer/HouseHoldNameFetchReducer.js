import {HOUSEHOLD_Name_FETCH_SUCCESS} from '../actions/types'

const  INITIAL_STATE={};

export default (state=INITIAL_STATE,action)=>
{
    switch(action.type)
    {
        case HOUSEHOLD_Name_FETCH_SUCCESS:
        
        return action.payload;
        // case HOUSEHOLD_NAME_FETCH:
        // console.log('feth reducer',action.payload);
        // return action.payload;

       

        default:
        return state;
    }

};