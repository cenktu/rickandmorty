import React from 'react';
import EpisodeCard from '../Card/EpisodeCard'; 
import './EpisodeList.css';
import { Link } from 'react-router-dom';
const EpisodeList = ({ episodes }) => {
    return (
        <div className="episode-list">
            {episodes.map((episode, index) => (
                <Link className='episode-list-link' to={`/episode/${episode.id}`} key={index}style={{textDecoration:"none"}} >
                    <EpisodeCard episode={episode} />
                </Link>
            ))}
        </div>
    );
};

export default EpisodeList;
