import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../Services/api';
import Pagination from '../Components/Pagination/Pagination';
import CharacterList from '../Components/List/CharacterList';
import Search from '../Components/Search/Search';
import "./CharacterListPage.css"
const CharacterListPage = () => {
    const [characters, setCharacters] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        fetchCharacters();
    }, [currentPage]);

    const fetchCharacters = async (searchTerm = '') => {
        try {
            const response = await api.get(`/character?page=${currentPage}&name=${searchTerm}`);
            setCharacters(response.data.results);
            setTotalPages(response.data.info.pages);
        } catch (error) {
            console.error('Error fetching characters:', error);
        }
    };
    const handlePageChange = ({selected}) => {
        setCurrentPage(selected+1);
    };
    const handleSearch = (searchTerm) => {
        fetchCharacters(searchTerm);
    };
    return (
        <div className="character-list-page">
            <h2>Characters</h2>
            <Search onSearch={handleSearch} /> 
            <CharacterList characters={characters}/>
            <Pagination totalPages={totalPages} onPageChange={handlePageChange} />
        </div>
    );
};

export default CharacterListPage;
