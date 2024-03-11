import React from 'react';
import CharacterCard from '../Card/CharacterCard';
import { Link } from 'react-router-dom';
import './CharacterList.css';

const CharacterList = ({ characters }) => {
    return (
        <div className="character-list">
        {characters.map((character, index) => (
            <Link className='episode-list-link' to={`/character/${character.id}`} key={index}style={{textDecoration:"none"}} >
                <CharacterCard key={index} character={character} />
            </Link>
            
        ))}
    </div>
    );
};

export default CharacterList;
