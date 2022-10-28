import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import pokemon from './pokemon';

const pokeConfig = {
  key: 'pokemon',
  storage
}


const reducer = combineReducers({
  pokemon: persistReducer(pokeConfig, pokemon),
})

export default reducer