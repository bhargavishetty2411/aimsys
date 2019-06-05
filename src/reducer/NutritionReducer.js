import { NUTRITIONUPDATE, NUTRITION_CREATE,NUTRITION_SAVE,NUTRITION_FETCH_LOAD_START,NUTRITION_FETCH_LOAD_END } from '../actions/types';

const INITIAL_STATE = {
    HNumber: '',
    CName: '',
    Age: '',
    height: '',
    weight: '',
    under: '',
    wast:'',
    stunt:'',
    lowbirth:'',
    breastfeed:'',
    exfeed:'',
    cfeed:'',
    edeli:'',
    search:''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case NUTRITIONUPDATE:
            return { ...state, [action.payload.name]: action.payload.value };
        case NUTRITION_CREATE:
            return INITIAL_STATE;
            case NUTRITION_SAVE:
            return INITIAL_STATE;
            case NUTRITION_FETCH_LOAD_START:
            return { Loading: action.payload };
        case NUTRITION_FETCH_LOAD_END:
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