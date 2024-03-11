import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    favoriteCharacters: [],
};

export const favoriteCharactersSlice = createSlice({
    name: 'favoriteCharacters',
    initialState,
    reducers: {
        addFavoriteCharacter: (state, action) => {
            if (state.favoriteCharacters.length < 10) {
                state.favoriteCharacters.push(action.payload);
                localStorage.setItem('favoriteCharacters', JSON.stringify(state.favoriteCharacters));
            }
            else {
                alert("You have exceeded the number of favorite characters. You must remove another character from your favorites. ");
        }
        },
        removeFavoriteCharacter: (state, action) => {
            state.favoriteCharacters = state.favoriteCharacters.filter(character => character.id !== action.payload);
            localStorage.setItem('favoriteCharacters', JSON.stringify(state.favoriteCharacters));
        },
    },
});

export const { addFavoriteCharacter, removeFavoriteCharacter } = favoriteCharactersSlice.actions;

export default favoriteCharactersSlice.reducer;
