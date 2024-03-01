import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSuggestions } from './showListSlice.ts';
import ShowList from './ShowList';
import {useNavigate} from "react-router-dom";

const SearchPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();
    const suggestions = useSelector((state: any) => state.shows.suggestions);
    const navigate = useNavigate();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearchTerm(value);

        if (value.trim() !== '') {
            dispatch(fetchSuggestions(value));
        }
    };

    const handleSuggestionClick = (suggestion: string, id: string) => {
        console.log('Selected suggestion:', suggestion, id);
        navigate(`/shows/${id}`);
    };

    return (
        <div>
            <form className="searchBar">
                <input
                    className="input"
                    type="text"
                    value={searchTerm}
                    onChange={handleInputChange}
                />
            </form>

            <ShowList suggestions={suggestions} handleSuggestionClick={handleSuggestionClick}  />
        </div>
    );
};

export default SearchPage;
