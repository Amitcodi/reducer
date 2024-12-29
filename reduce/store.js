import {createStore} from 'redux';
import counterReducer from './reducer/counterDeducer';

const store=createStore(counterReducer);



export default store;