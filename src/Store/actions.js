import { addFavoriteCharacter, removeFavoriteCharacter } from './reducers';

export const addFavorite = (character) => {
    return (dispatch) => {
        dispatch(addFavoriteCharacter(character));
    };
};

export const removeFavorite = (characterId) => {
    return (dispatch) => {
        dispatch(removeFavoriteCharacter(characterId));
    };
};
