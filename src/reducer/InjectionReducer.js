import { INJECTIONUPDATE, INJECTION_CREATE, INJECTION_SAVE, INJECTION_FETCH_LOAD_START, INJECTION_FETCH_LOAD_END } from '../actions/types';

const INITIAL_STATE = {
    HNumber: '',
    CName: '',
    DPickdob: new Date(),
    poliodate: new Date(),
    hepa: new Date(),
    BCG: new Date(),
    DPT1: new Date(),
    hepa1: new Date(),
    OPV1: new Date(),
    DPT2: new Date(),
    hepa2: new Date(),
    OPV2: new Date(),
    DPT3: new Date(),
    hepa3: new Date(),
    OPV3: new Date(),
    dadara1: new Date(),
    nutri1: new Date(),
    dptbooster: new Date(),
    dadara2: new Date(),
    complete: new Date(),
    Loading: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INJECTIONUPDATE:
            return { ...state, [action.payload.name]: action.payload.value };
        case INJECTION_CREATE:
            return INITIAL_STATE;
        case INJECTION_SAVE:
            return INITIAL_STATE;
        case INJECTION_FETCH_LOAD_START:
            return { Loading: action.payload };
        case INJECTION_FETCH_LOAD_END:
            return { Loading: action.payload };
        // case FETCH_CHILD:
        // const {payload} = action
        // state = _.filter(state, function(o){
        //   return o.CName.toLowerCase().includes(payload.toLowerCase());
        // })
        // return state;
        default:
            return state;
    }
};