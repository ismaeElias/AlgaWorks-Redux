import { combineReducers, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import calculatorReducer from './calculator/calculatore.reducer';
import productsReducer from './Products/Products.reducer';


const rootReducer = combineReducers({
  calculator : calculatorReducer,
  products: productsReducer
});

const persistedReducer = persistReducer({
  key: 'root',
  storage
}, rootReducer)

export const store = createStore(persistedReducer);
export const persistedStore = persistStore(store)
