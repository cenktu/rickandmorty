import { configureStore } from '@reduxjs/toolkit';
import favoriteCharactersReducer from './reducers';

export const store = configureStore({
    reducer: {
        favoriteCharacters: favoriteCharactersReducer,
    },
});
