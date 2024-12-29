import {INCREASE,DECREASE,RESET} from '../action/actionTypes';

const initialState=0;

function counterReducer(state=initialState,action){
    switch(action.type){
        case INCREASE:
            return state+1;
        case DECREASE:
            return state-1;
        case RESET:
            return 0;
        default:
            return state;
    }
}

export default counterReducer;