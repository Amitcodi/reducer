import {INCREASE,DECREASE,RESET} from './actionTypes';

//these are pure functions that return an object with a type property
const inc=()=>{
    return {
        type:INCREASE
    }
}
const dec=()=>{
    return {
        type:DECREASE
    }
}
const res=()=>{
    return {
        type:RESET
    }
}
export {inc,dec,res} ;