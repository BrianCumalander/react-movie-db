import { useState, useEffect } from 'react';
// API
import API from '../API';

// using a perameter, movieId 
export const useMovieFetch = movieId => {
    //create 3 states for that component
    const [state, setState] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        //only need one useEffect because the data for all of the movie is only being loaded once, and thats on the initial load of the movie page.
        const fetchData = async () => {
            try {
setLoading()
            } catch (error) {
 setError(true);
            }
        }
    }, [movieId]) //dependancy array. Only only changes if the movie ID changes

}