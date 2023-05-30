import React from 'react';
import { useParams } from 'react-router-dom';
 
// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';

// Components
import Grid from './Grid';
import Spinner from './Spinner';

// Hook
import { useMovieFetch } from '../hooks/useMovieFetch';
// Images
import NoImage from '../images/no_image.jpg';


const Movie = () => {
    const { movieId } = useParams();

    const { state: movie, loading, error } = useMovieFetch(movieId);

    console.log(movie);
    
    return (
        <>
            <div>Movies</div>
        </>
    );
};

export default Movie;