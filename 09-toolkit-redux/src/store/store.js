import {configureStore} from '@reduxjs/toolkit'
import {counterSlice} from './slices/counter/index.js'
import {pokemonSlice} from './slices/pokemon/index.js';
import {todosApi} from './apis/todosApi.js';

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        pokemon: pokemonSlice.reducer,
        [todosApi.reducerPath]: todosApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todosApi.middleware)
})