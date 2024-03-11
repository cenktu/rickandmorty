import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../Services/api';
import CharacterList from '../Components/List/CharacterList';
import './EpisodePage.css';
const EpisodePage = () => {
    const { id } = useParams();
    const [episode, setEpisode] = useState(null);
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetchEpisode(id);
    }, [id]);

    const fetchEpisode = async (id) => {
        try {
            const response = await api.get(`/episode/${id}`);
            setEpisode(response.data);
            fetchCharacters(response.data.characters); 
        } catch (error) {
            console.error('Error fetching episode:', error);
        }
    };

    const fetchCharacters = async (characterUrls) => {
        try {
            const characterPromises = characterUrls.map(url => api.get(url));
            const characterResponses = await Promise.all(characterPromises);
            const characterData = characterResponses.map(response => response.data);
            setCharacters(characterData);
        } catch (error) {
            console.error('Error fetching characters:', error);
        }
    };

    return (
        <div className="episode-page">
            {episode && (
                <div className="episode-details">
                    <h1>{episode.name}</h1>
                    <p>Air Date: {episode.air_date}</p>
                    <h2>Characters</h2>
                    <CharacterList characters={characters}/>
                </div>
            )}
        </div>
    );
};

export default EpisodePage;
