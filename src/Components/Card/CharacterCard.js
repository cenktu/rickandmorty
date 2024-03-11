import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaStar } from 'react-icons/fa';
import { addFavorite, removeFavorite } from '../../Store/actions';
import './CharacterCard.css';
const CharacterCard = ({ character }) => {
    const dispatch = useDispatch();
    const favoriteCharacters = useSelector(state => state.favoriteCharacters.favoriteCharacters);

    const isFavorite = favoriteCharacters.some(favorite => favorite.id === character.id);

    const handleFavoriteClick = () => {
        if (isFavorite) {
            dispatch(removeFavorite(character.id));
        } else {
            dispatch(addFavorite(character));
        }
    };

    return (
        <div key={character.id} className="character-card">
                    <h3>{character.name}</h3>
                    <img src={character.image} alt={character.name}/>
                    <div className={`alert-box alert-${character.status === 'Alive' ? 'success' : character.status === 'Dead' ? 'danger' : 'secondary'}`}>
                    {character.status}
                    </div>
                    <p>Species: {character.species}</p>
                    <p>Gender: {character.gender}</p>
                    <button className="favorite-button" onClick={handleFavoriteClick}>
                    <FaStar color={isFavorite ? 'gold' : 'gray'} />
                    </button>     
                    
                </div>
    );
};

export default CharacterCard;
