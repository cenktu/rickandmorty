import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../Services/api';
import { useDispatch, useSelector } from 'react-redux';
import { FaStar } from 'react-icons/fa';
import { addFavorite, removeFavorite } from '../Store/actions';
import './CharacterPage.css';

const CharacterPage = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState(null);
    const dispatch = useDispatch();
    const favoriteCharacters = useSelector(state => state.favoriteCharacters.favoriteCharacters);
    const isFavorite = favoriteCharacters.some(favorite => favorite.id === character?.id);

    useEffect(() => {
        const fetchCharacter = async () => {
            try {
                const response = await api.get(`/character/${id}`);
                setCharacter(response.data);
            } catch (error) {
                console.error('Error fetching character:', error);
            }
        };

        fetchCharacter();
    }, [id]);

    const handleFavoriteClick = () => {
        if (isFavorite) {
            dispatch(removeFavorite(character.id));
        } else {
            dispatch(addFavorite(character));
        }
    };

    return (
        <div className="character-page">
            {character && (
                <div className="character-details">
                    <h1>{character.name}</h1>
                    <img src={character.image} alt={character.name} />
                    <div className={`alert-box alert-${character.status === 'Alive' ? 'success' : character.status === 'Dead' ? 'danger' : 'secondary'}`}>
                        {character.status}
                    </div>
                    <p>Species : {character.species}</p>
                    <p>Gender : {character.gender}</p>
                    <p>Type: {character.type}</p>
                    <p>Location : {character.location.name}</p>
                    <p>Episode Count : {character.episode.length}</p>
                    <button className="favorite-button" onClick={handleFavoriteClick}>
                        <FaStar color={isFavorite ? 'gold' : 'gray'} />
                    </button>
                </div>
            )}
        </div>
    );
};

export default CharacterPage;
