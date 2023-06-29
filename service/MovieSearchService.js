import  MovieModelService  from '../model/MovieModel'; 
import React, { useState } from 'react';

const MovieSearchService = 
{
    searchMoviesApi: async (text, language) => 
    {
        try {
            const apiKey = 'd33813276544ca477e087e3112c888c6';
            const url = `https://api.themoviedb.org/3/search/multi?language=${language}&query=${text}&page=1&api_key=${apiKey}`;

            const response = await fetch(url);   
            const data = await response.json();
            const showData = MovieModelService.parseMoviesObj(data);

            return showData;
        } catch (error) {
        console.error(error);
        }
    },
};

export default MovieSearchService;