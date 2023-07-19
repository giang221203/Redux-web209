import { legacy_createStore as createStore, combineReducers } from 'redux';
import { counterReducer } from '@/reducers/Counter';
import { productReducer } from '@/reducers/Product';

const rootReducer = combineReducers({
    counter: counterReducer,
    products: productReducer
})

const store = createStore(rootReducer);
export default store;