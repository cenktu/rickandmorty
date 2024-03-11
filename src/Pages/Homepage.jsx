import React, { useState, useEffect } from 'react';
import Pagination from '../Components/Pagination/Pagination';

import EpisodeList from '../Components/List/EpisodeList';
import api from '../Services/api';
import Search from '../Components/Search/Search';
import "./HomePage.css"
const HomePage = () => {
    const [episodes, setEpisodes] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        fetchEpisodes();
    }, [currentPage]);

    const fetchEpisodes = async (searchTerm = '') => {
        try {
            const response = await api.get(`/episode?page=${currentPage}&name=${searchTerm}`);
            setEpisodes(response.data.results);
            setTotalPages(response.data.info.pages);
            
        } catch (error) {
            console.error('Error fetching episodes:', error);
        }
    };

    const handlePageChange = ({selected}) => {
        setCurrentPage(selected+1);
    };
    const handleSearch = (searchTerm) => {
        fetchEpisodes(searchTerm);
    };
    return (
        <div className="home-page">
            <h1>Episodes</h1>
            <Search onSearch={handleSearch}/>
            <EpisodeList episodes={episodes} />
            <Pagination totalPages={totalPages} onPageChange={handlePageChange} />
        </div>
    );
};

export default HomePage;
