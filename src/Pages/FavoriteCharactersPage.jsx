import React, { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { removeFavoriteCharacter } from '../Store/reducers';
import "./FavoriteCharactersPage.css"

const FavoriteCharactersPage = () => {
    const favoriteCharacters = useSelector(state => state.favoriteCharacters.favoriteCharacters);
    const dispatch = useDispatch();
    const [selectedCharacter, setSelectedCharacter] = useState(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleRemoveCharacter = () => {
        if (selectedCharacter) {
            dispatch(removeFavoriteCharacter(selectedCharacter.id));
            setSelectedCharacter(null);
            setIsDialogOpen(false);
        }
    };

    const openDialog = (character) => {
        setSelectedCharacter(character);
        setIsDialogOpen(true);
    };

    const closeDialog = () => {
        setSelectedCharacter(null);
        setIsDialogOpen(false);
    };

    return (
        <div className="favorite-characters-page">
            <h1>Favorite Characters</h1>
            <ul>
                {favoriteCharacters.map(character => (
                    <div className='favorite-character'>
                        <p>{character.name}</p>
                        <img src={character.image} alt={character.name}/>
                        <div className={`alert-box alert-${character.status === 'Alive' ? 'success' : character.status === 'Dead' ? 'danger' : 'secondary'}`}>
                        {character.status}
                        </div>
                    
                        <button className="delete-button" key={character.id} onClick={() => openDialog(character)}>Delete</button>
                    
                    </div>
                ))}
            </ul>
            {isDialogOpen && (
                <div className="dialog-box">
                    <p>Are you sure you want to remove "{selectedCharacter.name}" from your favorites?</p>
                    <button onClick={handleRemoveCharacter}>Yes</button>
                    <button onClick={closeDialog}>No</button>
                </div>
            )}
        </div>
    );
};

export default FavoriteCharactersPage;